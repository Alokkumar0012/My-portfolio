// src/components/Education.jsx
import React, { useRef, useEffect, useState } from "react";
// Lucide React se GraduationCap icon import karein
import { GraduationCap } from 'lucide-react'; 

// Ek alag component banate hain har Education Card ke liye
// Taki har card apni animation state ko manage kar sake
const EducationCard = ({ education, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jab card viewport mein aaye, toh isVisible ko true karein
        // Aur ek baar animate hone ke baad observer ko hata dein
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animation ek baar chalne ke baad observer ko hata dein
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Jab card ka 10% dikhe, tab trigger karein
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isVisible]); // isVisible dependency add kiya takki effect correctly run ho


  // Animation classes aur dynamic delay add karein
  // Delay calculation: index * 100ms (har agla card 100ms der se dikhega)
  const animationClasses = `
    transition-opacity transform duration-700 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    delay-${index * 100}
  `; // Delay classes ko Tailwind config mein define karne ki zarurat pad sakti hai agar default delays kafi na hon

  return (
    <div
      ref={cardRef} // Har card ka apna ref
      key={education.id}
      className={`
        bg-gray-700 p-6 rounded-xl shadow-xl flex flex-col h-full transform transition duration-300 hover:scale-105 hover:shadow-2xl
        dark:bg-gray-800 dark:text-white dark:hover:shadow-lg
        ${animationClasses}
      `}
    >
      <h3 className="text-2xl font-semibold mb-2 text-yellow-300 dark:text-yellow-500">{education.degree}</h3>
      <p className="text-lg text-gray-200 dark:text-gray-300 mb-1">{education.university}</p>
      <p className="text-md text-gray-400 dark:text-gray-300 mb-4">{education.duration}</p>
      <p className="text-base text-gray-300 flex-grow dark:text-gray-300">{education.description}</p>
    </div>
  );
};


const Education = () => {
  // Main Education component se ab global animation state remove kar di gayi hai
  // Only for main section reference, no animation on this wrapper itself
  const sectionRef = useRef(null);

  // Sample education data (aap isko apni educational details se replace kar sakte hain)
  const educationDetails = [
    {
      id: 1,
      degree: "Master in Computer Application", // Master Degree Entry
      university: "Marwadi university, Rajkot,Gujrat",
      duration: "2024 - 2026",
      // description: "Specialized in advanced software design patterns, cloud computing, and machine learning applications. Completed a thesis on scalable microservices architecture.",
    },
    {
      id: 2,
      degree: "Bachelor of Arts",
      university: "DDU university,Gorkhpur Uttar Pardesh",
      duration: "2021 - 2023",
      // description: "Focused on data structures, algorithms, web development, and software engineering principles. Completed several projects in full-stack development and machine learning.",
    },
    {
      id: 3,
      degree: "Higher Secondary Education (12th Grade)",
      university: "Mukhi ram high school,thawe Gopalganj,Bihar.",
      duration: "2019 - 2021",
      // description: "Specialized in Science stream (Physics, Chemistry, Maths). Developed strong foundational knowledge in logical reasoning and problem-solving.",
    },
    {
      id: 4,
      degree: "Secondary Education (10th Grade)",
      university: " prathmik vidhyalay,Semra,thawe Gopalganj,Bihar. ",
      duration: "2018",
      // description: "Completed secondary education with focus on core subjects and extracurricular activities. Participated in science fairs and coding clubs.",
    },
  ];

  return (
    // Education section ka main container
    <section
      id="education"
      ref={sectionRef} // ref ko section se link karein
      className="min-h-screen flex items-center justify-center bg-gray-800 text-white p-8 font-inter
                    dark:bg-black dark:text-white transition-colors duration-500"
    >
      {/* Content wrapper. Ab is wrapper par animation nahi hai. */}
      <div className={`max-w-6xl mx-auto text-center py-20`}>
        {/* Section heading with GraduationCap icon */}
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 flex items-center justify-center space-x-4
                       dark:text-yellow-600">
          <GraduationCap size={40} className="text-white dark:text-yellow-600" />
          <span>My Education</span>
        </h2>

        {/* Education details grid/list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationDetails.map((edu, index) => (
            // Har card ko EducationCard component mein render karein
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
