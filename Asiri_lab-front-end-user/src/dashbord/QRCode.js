import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function QRCode() {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='bg-blue-500 flex rounded-lg'>
      {/* First Part */}
      <div className='w-3/4 rounded-l-lg bg-white p-8'>
        <div className='flex justify-center items-center mb-8'>
          <FaUser className='text-4xl mr-4' />
          <h1 className='text-4xl font-bold'>Profile Details</h1>
        </div>

        <div>
          
        </div>
      </div>
      {/* Second Part */}
      <div className='w-1/4 rounded-r-lg bg-white p-8'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-24 h-24 rounded-full bg-gray-400 mb-4'></div>
          <Calendar value={date} onChange={handleDateChange} />
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4' onClick={handlePopup}>Add Data</button>
          {showPopup && (
            <div className='fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50'>
              <div className='flex items-center justify-center min-h-screen'>
                <div className='bg-yellow-400 rounded-lg p-8'>
                  <h2 className='text-xl font-bold mb-4'>Add User Details</h2>
                  <input type='text' className='w-full border border-gray-300 rounded-md p-2 mb-4' placeholder='Name' />
                  <input type='text' className='w-full border border-gray-300 rounded-md p-2 mb-4' placeholder='Email' />
                  


                  <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>Save</button>
                  <button className='bg-red-500 text-white font-bold py-2 px-4 rounded ml-2' onClick={handleClosePopup}>Close</button>
                </div>
              </div>
            </div>
          )}
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2'>Update Data</button>
        </div>
      </div>
    </div>
  );
}

export default QRCode;
