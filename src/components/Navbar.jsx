// src/components/Navbar.jsx
import React, { useState } from "react";
// Lucide React se Menu (hamburger) aur X (close) icons import karein
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  // Mobile menu ki state ko manage karein (true jab menu open ho)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu toggle karne ka function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Navigation bar ka main container. Background color aur shadow update kiye gaye hain.
    // Dark mode classes ko App.jsx ke colors se synchronize kiya gaya hai
    <nav className="bg-gray-950 text-gray-200 p-4 fixed top-0 w-full z-50 shadow-xl border-b border-gray-700
                    dark:bg-gray-50 dark:text-gray-900 dark:border-gray-300 transition-colors duration-700 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        {/* Portfolio Logo/Name */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-yellow-400 dark:text-yellow-700">
          <span>Alok</span> {/* Aap apna naam yahan likh sakte hain */}
        </div>

        {/* Hamburger/Close icon button for mobile */}
        <button
          className="sm:hidden text-gray-200 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />} {/* Menu open hone par X dikhega, warna Hamburger */}
        </button>

        {/* Navigation links ki list */}
        {/* Conditional classes: sm:flex-row on small screens se upar hamesha dikhe,
            warna hidden by default, aur isMenuOpen true hone par flex-col dikhe. */}
        <ul className={`
            ${isMenuOpen ? 'flex flex-col' : 'hidden'}
            sm:flex sm:flex-row sm:space-y-0 sm:space-x-8 text-lg font-inter
            absolute sm:relative top-16 sm:top-auto left-0 sm:left-auto
            w-full sm:w-auto bg-gray-900 dark:bg-gray-100 sm:bg-transparent sm:dark:bg-transparent
            p-4 sm:p-0 shadow-lg sm:shadow-none
            transition-all duration-300 ease-in-out
        `}>
          <li>
            <a
              href="#hero"
              className="block py-2 px-1 transition duration-300 ease-in-out hover:text-yellow-400 focus:outline-none focus:ring-0
                         dark:hover:text-yellow-600 dark:text-gray-900 relative group"
              onClick={() => setIsMenuOpen(false)} // Link click karne par menu close ho jaye
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 dark:bg-yellow-600"></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 px-1 transition duration-300 ease-in-out hover:text-yellow-400 focus:outline-none focus:ring-0
                         dark:hover:text-yellow-600 dark:text-gray-900 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 dark:bg-yellow-600"></span>
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="block py-2 px-1 transition duration-300 ease-in-out hover:text-yellow-400 focus:outline-none focus:ring-0
                         dark:hover:text-yellow-600 dark:text-gray-900 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 dark:bg-yellow-600"></span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-2 px-1 transition duration-300 ease-in-out hover:text-yellow-400 focus:outline-none focus:ring-0
                         dark:hover:text-yellow-600 dark:text-gray-900 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 dark:bg-yellow-600"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 px-1 transition duration-300 ease-in-out hover:text-yellow-400 focus:outline-none focus:ring-0
                         dark:hover:text-yellow-600 dark:text-gray-900 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 dark:bg-yellow-600"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
