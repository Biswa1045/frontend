import React from 'react';
import Image from '../../helpline_img.png';

const EmergencySection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 text-left">
        <h2 className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">Help Line</h2>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Need Emergency Contact</h1>
        <p className="text-base text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida tempor incididu ut labore.
        </p>
        <ul className="text-sm text-gray-600 mb-8">
          <li className="flex items-center mb-2">
            <svg className="h-4 w-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>24/7 Contact Our Hospital</span>
          </li>
          <li className="flex items-center mb-2">
            <svg className="h-4 w-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>24 Hours Open Our Hospital</span>
          </li>
          <li className="flex items-center mb-2">
            <svg className="h-4 w-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>Emergency Contact Our Phone Number</span>
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-blue-100 transition duration-300">
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p className="text-gray-700">contact@hospital.com</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-blue-100 transition duration-300">
            <h3 className="font-bold text-xl mb-2">Phone</h3>
            <p className="text-gray-700">(123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
        <img
          className="w-full h-auto "
          src={Image}
          alt="Emergency Contact"
        />
      </div>
    </div>
  );
}

export default EmergencySection;
