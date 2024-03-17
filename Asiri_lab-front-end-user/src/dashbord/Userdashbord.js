import React from 'react';

function UserDashboard() {
  return (
    <div className="bg-blue-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">User Dashboard</h1>
          <p className="mt-1 text-lg text-gray-600">Welcome to your dashboard. Here's an overview of your gym activities.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Progress chart component */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Progress Chart</h2>
            {/* Add your custom progress chart component here */}
          </div>
          
          {/* New classes component */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">New Classes</h2>
            <ul>
              <li className="text-gray-800 mb-2">Class 1</li>
              <li className="text-gray-800 mb-2">Class 2</li>
              <li className="text-gray-800 mb-2">Class 3</li>
            </ul>
          </div>
          
          {/* Attendance count component */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Attendance Count</h2>
            <p className="text-gray-800">Total: 100</p>
            <p className="text-gray-800">Present: 75</p>
            <p className="text-gray-800">Absent: 25</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
