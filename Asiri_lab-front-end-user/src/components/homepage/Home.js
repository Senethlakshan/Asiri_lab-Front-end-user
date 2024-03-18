import React from 'react';
import { Link } from "react-router-dom";
import Banner from '../../assests/home/banner-1.jpeg'
import kikboxingImg from "../../assests/kikboxing.jpeg";
import strangthImg from "../../assests/strangth.jpeg";
import yogaImg from "../../assests/yogaImg.jpeg";
import basicImg from '../../assests/home/protest (2).jpeg'
import proImg from '../../assests/home/protest (1).jpeg'
import familyImg from '../../assests/home/familytest.jpeg'
import studentImg from '../../assests/home/studenttest.jpeg'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaStar, FaRegStar} from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Banner */}
      {/* <section
        className="py-40"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className="container mx-auto text-left p-10 w-5/5 ">
        <h1 className="px-2 py-1 text-m md:text-2xl  text-white mb-5"> Discounted fitness Deals</h1>
        <h3 className="px-2 py-1 text-m md:text-7xl font-bold text-green-500 mb-5">50% off</h3>
          <h1 className="px-2 py-1 text-m md:text-5xl font-bold text-white mb-5">
            Get Fit. Stay Fit.
          </h1>

          <Link to="/register">
            <button className="bg-rose-600 hover:bg-rose-700 text-white py-3 px-8 rounded-full shadow-lg">
              Join Now
            </button>
          </Link>
        </div>
      </section> */}

     {/* Gym Features */}
     <section className="bg-gray-900 text-green-400 py-16">
        <div className="container mx-auto text-center">
          <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-8">Our Gym Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-green-800 rounded-lg shadow-lg p-8">
        <i className="fas fa-dumbbell text-4xl mb-4"></i>
        <h3 className="text-xl font-bold mb-2">State of the art equipment</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="bg-green-800 rounded-lg shadow-lg p-8">
        <i className="fas fa-users text-4xl mb-4"></i>
        <h3 className="text-xl font-bold mb-2">Experienced Trainers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="bg-green-800 rounded-lg shadow-lg p-8">
        <i className="fas fa-clock text-4xl mb-4"></i>
        <h3 className="text-xl font-bold mb-2">24/7 Access</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="bg-green-800 rounded-lg shadow-lg p-8">
        <i className="fas fa-leaf text-4xl mb-4"></i>
        <h3 className="text-xl font-bold mb-2">Healthy Environment</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      {/* Packages Lists */}
      
  <div class="container mx-auto p-9  max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-lime-400 transition duration-300 shadow-cyan-400">
    <img class="rounded-xl" src={basicImg} alt="" />
    <p className="mt-2 text-white">This typically offers access to basic gym equipment and facilities, such as cardio machines, weights, and showers.</p>
    <div class="flex justify-between items-center">
      <div>
        <h1 class="mt-5 text-2xl font-semibold text-white">Basic</h1>
        <p class="mt-2">LKR 750.00</p>
      </div>
      <div>
        <button class="text-white text-md font-semibold bg-green-400  py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
      </div>
    </div>
  </div>

  <div class="container mx-auto p-9  max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-lime-400 transition duration-300 shadow-cyan-400">
    <img class="rounded-xl" src={proImg} alt="" />
    <p className="mt-2 text-white">This usually includes additional perks, such as access to group fitness classes, personal training sessions, and spa facilities.</p>
    <div class="flex justify-between items-center">
      <div>
        <h1 class="mt-5 text-2xl font-semibold text-white">Premium</h1>
        <p class="mt-2">LKR 1900.00</p>
      </div>
      <div>
        <button class="text-white text-md font-semibold bg-green-400  py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
      </div>
    </div>
  </div>

  <div class="container mx-auto p-9  max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-lime-400 transition duration-300 shadow-cyan-400">
    <img class="rounded-xl" src={familyImg} alt="" />
    <p className="mt-2 text-white">This package is often designed for families and may include discounts or free access for multiple family members.</p>
    <div class="flex justify-between items-center">
      <div>
        <h1 class="mt-5 text-2xl font-semibold text-white">Family</h1>
        <p class="mt-2">LKR 2500.00</p>
      </div>
      <div>
        <button class="text-white text-md font-semibold bg-green-400  py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
      </div>
    </div>
  </div>

  <div class="container mx-auto p-9  max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-lime-400 transition duration-300 shadow-cyan-400">
    <img class="rounded-xl" src={studentImg} alt="" />
    <p className="mt-2 text-white">This typically offers access to basic gym equipment and facilities, such as cardio machines, weights, and showers.</p>
    <div class="flex justify-between items-center">
      <div>
        <h1 class="mt-5 text-2xl font-semibold text-white">Student</h1>
        <p class="mt-2">LKR 500.00</p>
      </div>
      <div>
        <button class="text-white text-md font-semibold bg-green-400  py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
      </div>
    </div>
  </div>
    </div>
  </div>
 </div>
</section>



      

      {/* Workout Cards */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-400 ">
            Popular Workouts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  rounded-lg shadow-lg">
              <img
                src={kikboxingImg}
                alt="Workout 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-3 text-white">Cardio Kickboxing</h3>
                <p className="text-white">
                  A high-energy cardio workout that combines martial arts
                  techniques with fast-paced cardio moves.
                </p>
                <Link to="/article-Cardio-Kickboxing">
                <button className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-full mt-5">
                  View Details
                </button>
               </Link>
                
              </div>
            </div>
            <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  rounded-lg shadow-lg">
              <img
                src={strangthImg}
                alt="Workout 2"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-3 text-white">Strength Training</h3>
                <p className="text-white">
                  Build muscle and increase strength with our variety of
                  weightlifting equipment and guided workouts.
                </p>
                <Link to="/article-Strength-Training">
                <button className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-full mt-5">
                  View Details
                </button>
               </Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  rounded-lg shadow-lg">
              <img
                src={yogaImg}
                alt="Workout 3"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-3 text-white">Yoga and Pilates</h3>
                <p className="text-white">
                  Relax and unwind with our yoga and Pilates classes, led by
                  experienced instructors.
                </p>
                <Link to="/article-Yoga-and-Pilates">
                <button className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-full mt-5">
                  View Details
                </button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Feedback */}
      <div className="bg-gray-900 py-16 text-green-400">
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold mb-8 text-center">Our Customers Love Us</h2>
    <div className="flex items-center justify-center mb-10">
      <FaStar className="text-yellow-500 text-4xl mr-2" />
      
      <span className="ml-4 text-white">4.0 rating</span>
    </div>
    <div className="flex flex-wrap justify-center ">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 ">
        <div className="bg-green-700 rounded-lg shadow-lg p-6">
          <p className="text-white text-sm mb-4">"The facilities are clean, the staff is friendly and the trainers are knowledgeable."</p>
          <h4 className="text-lg font-semibold mb-2">Deneth naween</h4>
          <p className="text-white text-sm">GYMඑකlk Member</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-green-700 rounded-lg shadow-lg p-6">
          <p className="text-white text-sm mb-4">"I've tried many gyms over the years and Fitness Hub is by far the best."</p>
          <h4 className="text-lg font-semibold mb-2">harsha nishan</h4>
          <p className="text-white text-sm">GYMඑකlk Member</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Location */}
<section class="bg-gray-900 py-16">
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
  

  {/* Footer */}
<footer className="bg-gray-900 text-white py-4 px-8">
  <div className="container mx-auto flex justify-between items-center">
    <div>
      <p>Connect with us:</p>
      <div className="flex mt-2">
        <a href="#" className="mr-4">
          <FaFacebook size={32} />
        </a>
        <a href="#" className="mr-4">
          <FaTwitter size={32} />
        </a>
        <a href="#" className="mr-4">
          <FaInstagram size={32} />
        </a>
      </div>
    </div>
    <div>
      <p>Subscribe to our newsletter:</p>
      <div className="flex mt-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-4 rounded-l-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        />
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-r-full">
          Subscribe
        </button>
      </div>
    </div>
    <div>
      <p className='footer-link text-green-600 hover:text-green-400'>Links:</p>
      <div className="flex flex-col mt-2">
        <Link to="/about" className='text-green-600 hover:text-green-400'>About</Link>
        <a href="#" className='text-green-600 hover:text-green-400'>Policy</a>
        <a href="#"className='text-green-600 hover:text-green-400'>Terms & Conditions</a>
        <a href="#"className='text-green-600 hover:text-green-400'>Privacy Policy</a>
        <a href="#" className='text-green-600 hover:text-green-400'>Company</a>
        <a href="#" className='text-green-600 hover:text-green-400'>Careers</a>
      </div>
    </div>
  </div>
  <p className="text-center">&copy; 2023 GYMඑක.lk . All rights reserved.</p>
</footer>

    </div>
  );
}

export default Home;






