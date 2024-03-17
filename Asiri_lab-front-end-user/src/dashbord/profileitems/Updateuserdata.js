import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Updateuserdata() {

    //add user PUT user data 
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        dob: '',
        nic: '',
        telephone: '',
        weight: '',
        height: ''
    });

    // Fetch user data from server and set as initial form data
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
        setFormData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('usersdatatoken');

        const response = await fetch('/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);
       
        //toastify notification Sucsess ,Not
        if (response.status === 200) {
            toast.success('Data updated successfully', {
                position: toast.POSITION.TOP_CENTER,
                toastStyle: { width: '300px' },
                autoClose: 500,
                style: {
                    background: '#FFFFFF',
                    color:'#000000'
                    
                },
            });
        } else if (response.status === 404) {
            toast.error('User data already exists', {
                position: toast.POSITION.TOP_CENTER,
                toastStyle: { width: '300px' },
                autoClose: 500,
                style: {
                    background: '#FFFFFF',
                    color:'#000000'
                    
                },
            });
        }

        // Check if the data was saved successfully and clear form 
        if (data.success) {
            // Clear the input fields
            setFormData({
                fullName: '',
                address: '',
                dob: '',
                nic: '',
                telephone: '',
                weight: '',
                height: ''
            });


        }
    };


    return (
        <>
            <h1 className='text-2xl font-bold mb-4 bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent pl-3 mr-7 rounded-lg  '>Update your Information</h1>

            <form onSubmit={handleSubmit} className='bg-white p-4  rounded-md' >
                <div className='mb-4'>
                    <input
                        type='text'
                        name='fullName'
                        placeholder='Full Name'
                        value={formData.fullName}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        name='address'
                        placeholder='Address'
                        value={formData.address}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='date'
                        name='dob'
                        placeholder='Date of Birth'
                        value={formData.dob}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        name='nic'
                        placeholder='National Identification Card'
                        value={formData.nic}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        name='telephone'
                        placeholder='Telephone'
                        value={formData.telephone}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='number'
                        name='weight'
                        placeholder='Weight'
                        value={formData.weight}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='number'
                        name='height'
                        placeholder='Height'
                        value={formData.height}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded'

                    />
                </div>
                <div className='flex justify-start'>
                    <button type='submit' className='bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded mr-2'>Update</button>

                </div>

            </form>

        </>
    );
}

export default Updateuserdata;

