import React from 'react';
import Button from '../Button';
import AppoinmentImg from '../../appoinment_img.png';

const CardComponent = () => {
  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden');
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-8">
      <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 rounded-lg shadow-lg overflow-hidden w-full max-w-5xl relative">
      <div className="text-left ml-8 mt-8">
        <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-3">About Us</h2>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">The Great Place Of Medical Hospital Center</h1>
        </div>
        <div className="flex">
          <div className="w-1/2 p-8">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="disease"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your Disease"
                />
              </div>
              <div>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-4 w-full text-lg text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div>
                <input
                  type="date"
                  id="date"
                  className="block w-full p-4 text-lg text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="relative">
                <select
                  id="time"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>9 AM - 10 AM</option>
                  <option>10 AM - 11 AM</option>
                  <option>11 AM - 12 PM</option>
                  <option>12 PM - 1 PM</option>
                </select>
              </div>
              <Button text='Submit'/>
            </form>
          </div>
          <div className="w-1/2 relative">
            <img
              src={AppoinmentImg}
              alt="Card image"
              className="w-full h-full object-cover absolute right-[-50px] top-0"
            />
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default CardComponent;
