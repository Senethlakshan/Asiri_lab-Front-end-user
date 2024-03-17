import React, { useState } from 'react';
import { FaUser,FaTimes,FaUserPlus,FaUserEdit  } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Adduserdata from '../dashbord/profileitems/Adduserdata';
import Updateuserdata from '../dashbord/profileitems/Updateuserdata';
import UserDetail from '../dashbord/profileitems/UserDetails';
//import UserBMIcal from '../dashbord/profileitems/UserBMIcal';
import Profilediv from '../dashbord/divPanel/Profilediv';

function Profile() {


  //calender
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [updatepopup, setupdatepopup] = useState(false);

  const handleDateChange = (date) => {
    setDate(date);
  };

  //add form popup
  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  //update form popup
  const updatehandlePopup = () => {
    setupdatepopup(!updatepopup);
  };

  const updatehandleClosePopup = () => {
    setupdatepopup(false);
  };

  return (
    <div className='bg-gradient-to-r from-indigo-300 to-purple-400 flex rounded-lg'>
      {/* First Part */}
      <div className='w-3/4 rounded-l-lg  p-2 min-h-screen'>
        <div className='flex justify-center items-center mb-8 '>
          <FaUser className='text-4xl mr-4' />
          <h1 className='text-4xl font-bold '>Profile</h1>
        </div>
        
        {/* show user details GET method */}
        <div>
        <UserDetail/>
        </div>
        <div className='mt-2'>
       <Profilediv/>
        </div>
       
      </div>
      {/* Second Part */}
      <div className='w-1/4 rounded-r-lg bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 p-8'>
        <div className='flex flex-col justify-center items-center'>
          <Calendar value={date} onChange={handleDateChange} />
          <button className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-indigo-500 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline inline-flex items-center mt-4 w-full justify-center ' onClick={handlePopup}>  <FaUserPlus className='mr-2' />Add Data</button>
          {showPopup && (
            <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
            <div className='bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 w-3/4 h-4/5 rounded-lg p-8 relative'>
              {/* form close Button */}
              <button className='bg-gradient-to-r from-rose-400 to-red-500 text-white font-bold py-2 px-4 rounded absolute top-0 right-0 mt-2 mr-2' onClick={handleClosePopup}><FaTimes /></button>
              <Adduserdata/>
             
            </div>
          </div>
          
          )}
          <button className='bg-gradient-to-r from-emerald-400 to-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400  text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline inline-flex items-center w-full justify-center mt-4'onClick={updatehandlePopup}><FaUserEdit className='mr-2' />Update Data</button>
          {updatepopup && (
            <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
            <div className='bg-gradient-to-r from-emerald-500 to-emerald-900 w-3/4 h-4/5 rounded-lg p-8 relative'>
              {/* form close Button */}
              <button className='bg-gradient-to-r from-rose-400 to-red-500 text-white font-bold py-2 px-4 rounded absolute top-0 right-0 mt-2 mr-2' onClick={updatehandleClosePopup}><FaTimes /></button>
              <Updateuserdata/>
             
            </div>
          </div>
          
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

