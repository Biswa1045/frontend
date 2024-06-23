import React from 'react';

const Button2 = ({ href, text }) => {
  return (
    <div className="hidden md:flex w-4/5 h-full justify-end items-center px-1.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-blue-500 justify-center flex items-center h-3/5 rounded-full text-blue-500 cursor-pointer px-5 font-medium no-underline text-lg transition-all duration-600 hover:bg-blue-500 hover:text-white md:text-sm"
        style={{ padding: '10px 20px' }} // Adding padding inline style
      >
        {text}
      </a>
    </div>
  );
}

export default Button2;
