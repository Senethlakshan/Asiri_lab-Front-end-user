import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <div class="bg-gray-800 py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-center text-3xl font-bold text-green-500 mb-8">Contact Us</h2>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="message">
            Message
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <div class="flex justify-center">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send Message
          </button>
        </div>
      </div>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 class="text-lg font-bold text-gray-700 mb-4">Gym Location</h3>
        <p class="text-gray-600 mb-2">123 Main Street</p>
        <p class="text-gray-600 mb-2">108/2/1 George R. De Silva Mawatha,</p>
        <p class="text-gray-600 mb-2"> Colombo 01300</p>
        <p class="text-gray-600 mb-2">Phone: +94-123-4567</p>
        <p class="text-gray-600 mb-2">Email: conatct@gymekalk.com</p>
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

export default Contact;
