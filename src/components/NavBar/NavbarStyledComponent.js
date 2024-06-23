import { Link as LinkR } from 'react-router-dom';
import React from 'react';

export const Nav = ({ children }) => (
  <div className="bg-gray-100 h-20 flex items-center justify-center text-base sticky top-0 z-10">
    {children}
  </div>
);

export const NavbarContainer = ({ children }) => (
  <div className="flex justify-between items-center h-16 w-full px-6 max-w-5xl">
    {children}
  </div>
);

export const NavLogo = ({ children, to }) => (
  <LinkR to={to} className="w-4/5 px-1.5 flex justify-start items-center no-underline md:px-0">
    {children}
  </LinkR>
);

export const Span = ({ children }) => (
  <div className="px-1 font-bold text-lg">
    {children}
  </div>
);

export const NavItems = ({ children }) => (
  <ul className="w-full flex items-center justify-center gap-8 px-1.5 list-none md:hidden">
    {children}
  </ul>
);

export const NavLink = ({ children, href }) => (
  <a href={href} className="text-gray-700 font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500">
    {children}
  </a>
);

export const GitHubButton = ({ children, href }) => (
  <a href={href} className="border-2 border-blue-500 justify-center flex items-center h-3/5 rounded-full text-blue-500 cursor-pointer px-5 font-medium no-underline text-lg transition-all duration-600 hover:bg-blue-500 hover:text-white md:text-sm">
    {children}
  </a>
);

export const ButtonContainer = ({ children }) => (
  <div className="w-4/5 h-full flex justify-end items-center px-1.5 md:hidden">
    {children}
  </div>
);

export const MobileIcon = ({ children }) => (
  <div className="hidden md:block absolute top-0 right-0 transform translate-x-full translate-y-1/4 text-2xl cursor-pointer text-gray-700">
    {children}
  </div>
);

export const MobileMenu = ({ children, isOpen }) => (
  <div className={`flex flex-col justify-center gap-4 absolute top-20 right-0 w-full px-10 py-6 bg-gray-100 bg-opacity-60 transition-all duration-600 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} rounded-b-lg shadow-md opacity-${isOpen ? '100' : '0'} z-${isOpen ? '1000' : '-1000'}`}>
    {children}
  </div>
);

export const MobileMenuItems = ({ children }) => (
  <ul className="flex flex-col items-center justify-center gap-8 list-none w-full h-full">
    {children}
  </ul>
);

export const MobileMenuLink = ({ children, to }) => (
  <LinkR to={to} className="text-gray-700 font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500">
    {children}
  </LinkR>
);

export const MobileMenuButton = ({ children, href }) => (
  <a href={href} className="border-2 border-blue-500 justify-center flex items-center h-3/5 rounded-full text-blue-500 cursor-pointer px-5 font-medium no-underline text-lg transition-all duration-600 hover:bg-blue-500 hover:text-white">
    {children}
  </a>
);

export const MobileLink = ({ children, href }) => (
  <a href={href} className="text-gray-700 font-medium cursor-pointer transition-all duration-200 no-underline hover:text-blue-500">
    {children}
  </a>
);

export const MobileNavLogo = ({ children, to }) => (
  <LinkR to={to} className="w-4/5 px-1.5 flex justify-start items-center no-underline md:px-0">
    {children}
  </LinkR>
);
