// src/components/Footer.jsx
import React from "react";
// Lucide React se icons import karein, ab Mail icon bhi shamil hai
import { Phone, Mail, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';


const Footer = () => {
  return (
    // Footer section ka main container.
    // Dark background for light mode, light background for dark mode.
    <footer className="bg-gray-950 text-gray-200 p-8 font-inter
                    dark:bg-gray-50 dark:text-gray-900 dark:border-gray-300 transition-colors duration-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-8">
        {/* Column 1: Portfolio Intro */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 dark:text-yellow-600">Alok's Portfolio</h3>
          <p className="text-gray-300 dark:text-gray-700 leading-relaxed mb-4">
            Thank you for visiting my personal portfolio website. Connect with me over socials.
          </p>
          <p className="text-gray-300 dark:text-gray-700 leading-relaxed">
            Keep Rising. Connect with me over live chat! 🚀
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 dark:text-yellow-600">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="text-gray-300 hover:text-yellow-400 dark:text-gray-700 dark:hover:text-yellow-600 transition duration-300 flex items-center justify-center md:justify-start">
                <span className="mr-2">&rarr;</span>Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-300 hover:text-yellow-400 dark:text-gray-700 dark:hover:text-yellow-600 transition duration-300 flex items-center justify-center md:justify-start">
                <span className="mr-2">&rarr;</span>About
              </a>
            </li>
            <li>
              {/* Skills link ko projects se badla gaya hai, aur skills ke liye koi direct section nahi hai */}
              <a href="#projects" className="text-gray-300 hover:text-yellow-400 dark:text-gray-700 dark:hover:text-yellow-600 transition duration-300 flex items-center justify-center md:justify-start">
                <span className="mr-2">&rarr;</span>Projects
              </a>
            </li>
            <li>
              <a href="#education" className="text-gray-300 hover:text-yellow-400 dark:text-gray-700 dark:hover:text-yellow-600 transition duration-300 flex items-center justify-center md:justify-start">
                <span className="mr-2">&rarr;</span>Education
              </a>
            </li>
            {/* Work aur Experience links hata diye gaye hain jaisa aapne pehle kaha tha */}
            <li>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400 dark:text-gray-700 dark:hover:text-yellow-600 transition duration-300 flex items-center justify-center md:justify-start">
                <span className="mr-2">&rarr;</span>Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 dark:text-yellow-600">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start text-gray-300 dark:text-gray-700">
              <Phone size={20} className="mr-3 text-yellow-400 dark:text-yellow-600" /> +91 7739911081
            </li>
            <li className="flex items-center justify-center md:justify-start text-gray-300 dark:text-gray-700">
              <Mail size={20} className="mr-3 text-yellow-400 dark:text-yellow-600" /> alokkumarpatel13@gmail.com {/* Mail icon add kiya gaya hai */}
            </li>
            <li className="flex items-center justify-center md:justify-start text-gray-300 dark:text-gray-700">
              <MapPin size={20} className="mr-3 text-yellow-400 dark:text-yellow-600" /> Bihar, India - 841440
            </li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/alok-kumar-n121023/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Replace with your LinkedIn profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition duration-300 dark:text-gray-600 dark:hover:text-yellow-600"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/Alokkumar0012" // Replace with your GitHub profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition duration-300 dark:text-gray-600 dark:hover:text-yellow-600"
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </a>
            {/* <a
              href="#contact" // Replace with a chat link if you implement live chat
              className="text-gray-400 hover:text-yellow-400 transition duration-300 dark:text-gray-600 dark:hover:text-yellow-600"
              aria-label="Live Chat"
            >
              <MessageSquare size={28} />
            </a> */}
          </div>
        </div>
      </div>
      {/* Designed By text at the very bottom */}
      <div className="border-t border-gray-700 dark:border-gray-300 mt-8 pt-4 text-center text-sm text-gray-400 dark:text-gray-600">
        Designed By❤️Alok Kumar
      </div>
    </footer>
  );
};

export default Footer;
