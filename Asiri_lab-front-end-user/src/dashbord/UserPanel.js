import React, { useState } from 'react';
import Userdashbord from '../dashbord/Userdashbord'
import Packages from '../dashbord/Packages';
import Profile from '../dashbord/Profile';
import Fitness from '../dashbord/MyFitness'
import QrCodeinfo from '../dashbord/QRCode'

import { FaUserCircle, FaThList, FaHome, FaCalendarPlus, FaFlask, FaHistory } from 'react-icons/fa';

function UserPanel() {
    const [currentPage, setCurrentPage] = useState('user');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='flex bg-gray-900'>
            {/* slide bar */}
            <div className='w-1/6 h-screen p-4 bg-gray-800'>
                <h2 className='mb-4 flex items-center font-bold text-lg text-white'>
                    <FaThList className='mr-2' />
                    Dashboard
                </h2>
                <ul>
                    <li
                        className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${currentPage === 'user' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                        onClick={() => handlePageChange('user')}
                    >
                        <FaHome className='mr-2' />
                        Home
                    </li>
                    <li
                        className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${currentPage === 'Fitness' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                        onClick={() => handlePageChange('Fitness')}
                    >
                        <FaCalendarPlus className='mr-2' />
                        Book Appointment
                    </li>
                    <li
                        className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${currentPage === 'QrCodeinfo' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                        onClick={() => handlePageChange('QrCodeinfo')}
                    >
                        <FaFlask className='mr-2' />
                       Lab Tests
                    </li>
                    <li
                        className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${currentPage === 'packages' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                        onClick={() => handlePageChange('packages')}
                    >
                        <FaHistory className='mr-2' />
                       Test History
                    </li>
                    <li
                        className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${currentPage === 'profile' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                        onClick={() => handlePageChange('profile')}
                    >
                        <FaUserCircle className='mr-2' />
                        Profile
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-1'>
                {currentPage === 'user' && <Userdashbord />}
                {currentPage === 'Fitness' && <Fitness />}
                {currentPage === 'QrCodeinfo' && <QrCodeinfo />}
                {currentPage === 'packages' && <Packages />}
                {currentPage === 'profile' && <Profile />}
            </div>
        </div>
    );
}

export default UserPanel;
