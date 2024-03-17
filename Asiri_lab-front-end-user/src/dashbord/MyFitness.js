// import React from 'react';

// function MyFitness() {
//   return (
//     <div className='bg-white'>
//       <h1>MyFitness Page</h1>
//       <p>This is the profile page.</p>
//     </div>
//   );
// }

// export default MyFitness;

import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyFitness() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
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
          <p className='text-gray-600 mb-2'>Name: </p>
          <input type='text' className='w-full border border-gray-300 rounded-md p-2 mb-4' />
          <p className='text-gray-600 mb-2'>Address: </p>
          <input type='text' className='w-full border border-gray-300 rounded-md p-2 mb-4' />
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>Update</button>
        </div>
      </div>
      {/* Second Part */}
      <div className='w-1/4 rounded-r-lg bg-white p-8'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-24 h-24 rounded-full bg-gray-400 mb-4'></div>
          <Calendar value={date} onChange={handleDateChange} />
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4'>Add Data</button>
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2'>Update Data</button>
        </div>
      </div>
    </div>
  );
}

export default MyFitness;
