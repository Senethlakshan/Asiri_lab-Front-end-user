import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
// import { FaInfoCircle  } from "react-icons/fa";


const UserDetail = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/user/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('usersdatatoken'),
          },
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setUserData(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen font-bold">
        <ClipLoader size={50} color="#FFFFFF" loading={isLoading} />
      </div>
    );
  }

  if (error) {
    return <div class="relative">
      <div class="bg-blue-50 border border-blue-200 rounded-md p-4">
        <div class="flex">

          <div class="ml-3">
            <h1 className='text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent pl-1 rounded-lg'>
              User Details
            </h1>
            <div class="flex-shrink-0">
              <svg class="h-4 w-4 text-blue-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
            <div class="text-sm text-blue-700 mt-2">
              <div>Error loading user data: {error.message}</div>
            </div>
            <div class="bg-gradient-to-r from-fuchsia-600 to-pink-600  py-2 px-4 rounded  mt-2 mr-2 text-white">
             If you have not already added user details please click the Add button.
            </div>
          </div>
        </div>
      </div>

      <div class="absolute top-0 left-0 w-full h-full bg-white/[.5] rounded-md dark:bg-gray-800/[.4]"></div>

      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-fuchsia-600 rounded-full" role="status" aria-label="loading">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>;

  }

  return (
    <>
      <div className='bg-white p-4 rounded-md'>
        <h1 className='text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent pl-1 rounded-lg'>
          User Details
        </h1>
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <td className='font-bold text-gray-500 py-2 pr-4'>Full Name</td>
              <td className="py-2">{userData.fullName}</td>
            </tr>
            <tr className="border-b">
              <td className='font-bold text-gray-500 py-2 pr-4'>Address</td>
              <td className="py-2">{userData.address}</td>
            </tr>
            <tr className="border-b">
              <td className='font-bold text-gray-500 py-2 pr-4'>Date of Birth</td>
              <td className="py-2">{userData.dob}</td>
            </tr>
            <tr className="border-b">
              <td className='font-bold text-gray-500 py-2 pr-4'>National Identification Card</td>
              <td className="py-2">{userData.nic}</td>
            </tr>
            <tr className="border-b">
              <td className='font-bold text-gray-500 py-2 pr-4'>Telephone</td>
              <td className="py-2">{userData.telephone}</td>
            </tr>
            <tr className="border-b">
              <td className='font-bold text-gray-500 py-2 pr-4'>Weight</td>
              <td className="py-2">{userData.weight} kg</td>
            </tr>
            <tr>
              <td className='font-bold text-gray-500 py-2 pr-4'>Height</td>
              <td className="py-2">{userData.height} cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>


  );
};

export default UserDetail;
