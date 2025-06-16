// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground"; // ParticlesBackground ko import karein

// Sirf ek hi image URL
const profileImageUrl = "./images/aa.jpg"; // Yahan defaultImageUrl aur hoverImageUrl ko merge kiya gaya hai

const Hero = () => {
  // Ab currentImage state ki zaroorat nahi hai, seedhe profileImageUrl use karenge
  // const [currentImage, setCurrentImage] = useState(profileImageUrl);

  const professions = ['Web Developer', 'Designer', 'Freelancer', 'Frontend Developer'];
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseAfterType = 1500;
  const pauseAfterDelete = 500;

  useEffect(() => {
    const currentWord = professions[wordIndex];
    let timer;

    if (isDeleting) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % professions.length);
        timer = setTimeout(() => {}, pauseAfterDelete);
      }
    } else {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseAfterType);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, wordIndex, isDeleting, professions]);

  // Mouse enter/leave handlers ki ab zaroorat nahi hai image change ke liye
  // const handleMouseEnter = () => setCurrentImage(hoverImageUrl);
  // const handleMouseLeave = () => setCurrentImage(defaultImageUrl);

  return (
    // Hero section ka main container.
    // 'relative' positioning ParticlesBackground ko iske andar contain karega.
    // 'overflow-hidden' ensure karega ki particles is section ke bahar na jayen.
    <section
      id="hero"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 font-inter overflow-hidden relative"
    >
      {/* ParticlesBackground component yahan render hoga, Hero section ke background mein */}
      <ParticlesBackground />

      {/* Saara Hero content is div ke andar aayega aur z-index 10 par rahega */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full h-full">
        {/* Text content wrapper */}
        <div className="max-w-4xl lg:w-1/2 mx-auto lg:mx-0 text-center lg:text-left py-10 lg:py-20 mb-10 lg:mb-0">
          {/* Main heading. Text color ko hamesha white rakha gaya hai red background par visibility ke liye. */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-500 mb-4 animate-fade-in-down">
            Hello, I'm <span className="block mt-2 text-white">Alok kumar</span>
          </h1>

          {/* Sub-heading/Profession text with typing animation. Text color ko hamesha white rakha gaya hai. */}
          <p className="text-xl md:text-2xl text-white animate-fade-in-up">
            A passionate <span className="font-semibold text-yellow-400">
              {displayedText}
              {/* Blinking cursor */}
              <span className="cursor-animation inline-block w-1 h-6 bg-yellow-400 align-middle ml-1"></span>
            </span>
          </p>

          {/* Call to action button */}
          <button
            className="mt-8 bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-xl
                       hover:bg-yellow-400 transform hover:scale-105 transition duration-300 ease-in-out
                       focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Learn More
          </button>
        </div>

        {/* Image Container */}
        {/* Ab sirf ek hi image src={profileImageUrl} hai. Hover par scale (move) karega. */}
        <div
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative rounded-full overflow-hidden shadow-2xl border-4 border-yellow-500 transform transition duration-300 ease-in-out
                     " // 'mt-12 lg:mt-0' classes hata di gayi hai agar woh zaroori nahi hai alignment ke liye
          // onMouseEnter aur onMouseLeave ab zaroori nahi hain
        >
          <img
            src={profileImageUrl} // Ab currentImage state ki zaroorat nahi
            alt="Your Profile"
            // Hover par scale karne ke liye transition aur hover:scale-110 add kiya gaya hai
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x500/808080/FFFFFF?text=Image+Error";
            }}
          />
          {/* Overlay div ki ab zaroorat nahi hai image move ke liye */}
          {/* <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-full"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
