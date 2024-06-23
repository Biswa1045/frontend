import React from 'react';

const Card = ({ title, text, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 transform hover:translate-y-[-5px] transition-transform duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-base text-gray-700">{text}</p>
      </div>
    </div>
  );
}

export default Card;
