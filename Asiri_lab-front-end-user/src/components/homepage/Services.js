import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
// import MealPlan from './MealPlan';
// import BMIForm from './BMIForm';

function Services() {
  return (
    <div className='bg-gray-800 min-h-screen'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold text-white mb-4 text-center'>Services</h1>
        <p className='text-lg text-gray-200 mb-8 text-center'>
          Choose the package that suits you best.
        </p>

        <div className='flex flex-wrap mx-4'>
          <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
            <div className='bg-white rounded-lg p-8 shadow-md'>
              <h2 className='text-xl font-bold mb-4'>BMI Calculator</h2>
              <p className='text-gray-600 mb-4'>
                Use our BMI calculator to find out your body mass index and get personalized recommendations for reaching your fitness goals.
              </p>
              {/* <BMIForm /> */}
            </div>
          </div>

          <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
            <div className='bg-white rounded-lg p-8 shadow-md'>
              <h2 className='text-xl font-bold mb-4'>Meal Plans</h2>
              <p className='text-gray-600 mb-4'>
                We offer customized meal plans tailored to your individual needs and fitness goals. Choose from our pre-designed plans or create your own.
              </p>
              {/* <MealPlan /> */}
            </div>
          </div>

          <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
            <div className='bg-white rounded-lg p-8 shadow-md'>
              <h2 className='text-xl font-bold mb-4'>Personal Training</h2>
              <p className='text-gray-600 mb-4'>
                Our experienced personal trainers will work with you one-on-one to create a workout plan that helps you achieve your goals and fits your busy schedule.
              </p>
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline inline-flex items-center mt-4">
      <FaWhatsapp className="mr-2" /> Chat on WhatsApp
    </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
