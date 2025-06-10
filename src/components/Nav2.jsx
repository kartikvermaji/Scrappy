import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import logo from '../assets/lensroom logo black.png';

const Nav2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { path: '/about', label: 'ABOUT' },
    { path: '/services', label: 'EXPLORE' },
    { path: '/community', label: 'COMMUNITY' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="h-10" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-gray-900 font-medium text-[16px]">
          {navLinks.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              className={`hover:text-gray-400 transition duration-200 ${
                location.pathname === path ? 'border-b-2 border-black pb-1' : ''
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 text-xl focus:outline-none">
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 text-gray-800 font-medium shadow-md">
          {navLinks.map(({ path, label }) => (
            <a
              key={path}
              href={path}
              onClick={() => setMenuOpen(false)}
              className={`block py-1 ${
                location.pathname === path ? 'text-black font-semibold' : ''
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav2;
