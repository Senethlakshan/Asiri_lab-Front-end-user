import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true, // Important: this will allow Axios to send cookies
});

// Add a request interceptor
API.interceptors.request.use((config) => {
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
API.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    try {
      // Attempt to refresh token here
      const { data } = await API.post('/user/refresh');
      // If refresh was successful, retry the original request with the new access token
      originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
      return API(originalRequest);
    } catch (e) {
      // If token refresh fails, redirect to login or handle accordingly
      console.error('Unable to refresh token or session expired');
      // Add logic to redirect to login or clear session
    }
  }
  // Return any error which is not due to authentication back to the caller
  return Promise.reject(error);
});

export default API;
