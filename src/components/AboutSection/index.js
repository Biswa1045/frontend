import React from 'react';
import Button2 from '../Button2';

const AboutSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-left">
        <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-3">About Us</h2>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">The Great Place Of Medical Hospital Center</h1>
        <p className="text-base text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida tempor incididu ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>
        <ul className="text-sm text-gray-600 mb-8">
          <li className="flex items-center mb-2">
            <svg className="h-4 w-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>Hospital Services</span>
          </li>
          <li className="flex items-center mb-2">
            <svg className="h-4 w-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>24/7 Medical Emergency</span>
          </li>
          <li className="flex items-center mb-2">
            <svg className="h-4 w-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>Pharmacy On Clinic</span>
          </li>
        </ul>
        <Button2 href="https://your-appointment-url.com" text="Book A Doctor" />
      </div>
    </div>
  );
}

export default AboutSection;
