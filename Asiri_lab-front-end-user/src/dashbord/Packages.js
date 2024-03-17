import React, { useState } from 'react';
import { FaUser, FaTimes, FaUserPlus, FaUserEdit } from 'react-icons/fa';
import PackageList from './packagesitem/PackageList';
import SubscriptionHistory from './packagesitem/SubscriptionHistory';

function Packages() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='bg-indigo-100 flex rounded-lg'>
      {/* First Part */}
      <div className='w-3/4 rounded-l-lg p-2 min-h-screen'>
        <h1 className="mb-4 p-2 bg-gradient-to-r from-indigo-300 to-purple-400 text-black text-center font-bold rounded-lg"> Buy Packages</h1>
        <PackageList />
      </div>
      {/* Second Part */}
      <div className='w-1/4 rounded-r-lg bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 p-8'>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={togglePopup}>
          Show Subscription History
        </button>
        {showPopup && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md max-w-md">
              <h2 className="text-2xl font-bold mb-4">Subscription History</h2>
              <SubscriptionHistory />
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg" onClick={togglePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Packages;
