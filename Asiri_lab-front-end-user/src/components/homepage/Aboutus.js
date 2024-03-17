import React from 'react';
import weblogo from '../../assests/home/logo.jpeg'
import coach1 from '../../assests/home/coach1.jpeg'
import coach2 from '../../assests/home/coach2.jpeg'

const Aboutus = () => {
  return (
    <div>
    
    <section class="bg-gray-800 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center flex justify-center items-center">
      <h2 class="text-3xl font-extrabold text-green-500 sm:text-4xl mr-4">
        About
      </h2>
      <img src={weblogo} alt="HP Cloud Logo" />
    </div>
    <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
      We are a fitness center dedicated to helping our members achieve their health and wellness goals.
    </p>
  </div>
</section>



<section class="bg-green-500 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        Our Mission
      </h2>
      <p class="mt-4 max-w-2xl text-xl text-white mx-auto">
        At XYZ Gym, our mission is to create a welcoming and inclusive environment where everyone can achieve their fitness goals.
      </p>
    </div>
  </div>
</section>


<section class="bg-gray-800 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-green-500 sm:text-4xl">
        Our Coaches
      </h2>
    </div>
    <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
      <div class="bg-green-800 rounded-lg shadow-lg overflow-hidden">
        <img class="w-full h-56 object-cover" src={coach1} alt=""/>
        <div class="p-4">
          <h3 class="text-lg font-medium text-green-400">Jhone willey</h3>
          <p class="mt-2 text-green-400">Certified Personal Trainer</p>
        </div>
      </div>
      <div class="bg-green-800 rounded-lg shadow-lg overflow-hidden">
        <img class="w-full h-56 object-cover" src={coach2} alt=""/>
        <div class="p-4">
          <h3 class="text-lg font-medium text-green-400">Jane perera</h3>
          <p class="mt-2 text-green-400">Certified Yoga Instructor</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Location */}
<section class="bg-gray-800 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-green-400 sm:text-4xl">
        Our Location
      </h2>
    </div>
    <div class="mt-10 flex justify-center">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126736.4493362643!2d79.70716939726563!3d6.948527200000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258fcaa129eb1%3A0x9c0fc6a22c512322!2sPower%20World%20Gym!5e0!3m2!1sen!2slk!4v1682834765302!5m2!1sen!2slk"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>


    </div>
  );
}

export default Aboutus;
