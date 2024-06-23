import React from 'react';

const DoctorCard = ({ name, department, degree, imgSrc }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 transition duration-300 m-4">
      <img
        className="w-full h-48 object-cover hover:bg-blue-500 transition duration-300"
        src={imgSrc}
        alt="Profile"
      />
      <div className="p-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="text-gray-600">{department}</div>
        <div className="text-gray-600">{degree}</div>
      </div>
    </div>
  );
};

export default DoctorCard;
