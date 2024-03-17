import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 px-4 pt-4">
      <div className="text-white font-bold text-2xl mb-8">
        Dashboard
      </div>
      <ul>
        <li className="mb-4">
          <Link
            to="/dash/profile"
            className="text-gray-400 hover:text-white"
            activeClassName="text-white"
          >
            Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/dash/settings"
            className="text-gray-400 hover:text-white"
            activeClassName="text-white"
          >
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
