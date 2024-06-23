import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <div className="bg-[#222A35] h-20 flex items-center justify-center text-base sticky top-0 z-10">

      <div className="flex justify-between items-center h-16 w-full px-6 max-w-5xl">
        <LinkR to='/' className="w-4/5 px-1.5 flex justify-start items-center no-underline md:px-0">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            <DiCssdeck size="3rem" /> <div className="px-1 font-bold text-lg">Portfolio</div>
          </div>
        </LinkR>
        <div className="md:hidden absolute top-0 right-0 transform translate-x-full translate-y-1/4 text-2xl cursor-pointer text-gray-700">
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </div>
        <ul className="hidden md:flex w-full items-center justify-center gap-8 px-1.5 list-none">
          <LinkR to="/" className="text-white font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500">Home</LinkR>
          <LinkR to="/doctors" className="text-white font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500">Doctors</LinkR>
          <LinkR to='/services' className="text-white font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500">Services</LinkR>
          <LinkR to='/about' className="text-white font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500">About</LinkR>
          <LinkR to='/contact' className="text-white font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500">Contact</LinkR>
        </ul>
        <div className="hidden md:flex w-4/5 h-full justify-end items-center px-1.5">
          <a
            href={""}
            target="_blank"
            className="border-2 border-blue-500 justify-center flex items-center h-3/5 rounded-full text-blue-500 cursor-pointer px-5 font-medium no-underline text-lg transition-all duration-600 hover:bg-blue-500 hover:text-white md:text-sm"
          >
            Appointment
          </a>
        </div>
        {isOpen && (
          <div className={`flex flex-col justify-center gap-4 absolute top-20 right-0 w-full px-10 py-6 bg-gray-100 bg-opacity-60 transition-all duration-600 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} rounded-b-lg shadow-md opacity-${isOpen ? '100' : '0'} z-${isOpen ? '1000' : '-1000'}`}>
            <LinkR to="/" className="text-gray-700 font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}>Home</LinkR>
            <LinkR to="/doctors" className="text-gray-700 font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}>Doctors</LinkR>
            <LinkR to='/services' className="text-gray-700 font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}>Services</LinkR>
            <LinkR to='/about' className="text-gray-700 font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}>About</LinkR>
            <LinkR to='/contact' className="text-gray-700 font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}>Contact Us</LinkR>
            <a
              style={{
                padding: '10px 16px',
                background: theme.primary,
                color: 'white',
                width: 'max-content',
              }}
              href={""}
              target="_blank"
              className="border-2 border-blue-500 justify-center flex items-center h-3/5 rounded-full text-blue-500 cursor-pointer px-5 font-medium no-underline text-lg transition-all duration-600 hover:bg-blue-500 hover:text-white"
            >
              Appointment
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
