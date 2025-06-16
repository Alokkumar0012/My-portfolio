// src/components/About.jsx
import React, { useRef, useEffect, useState } from "react";
// Lucide React se User icon import karein
import { User, Atom, Cloud, Server, Package, Feather, Palette, Code, Coffee, Pipette, Cpu,
  Database, Rocket, Globe, Zap, GitFork, Github,
} from 'lucide-react';

const About = () => {
  // Animation ke liye refs
  const sectionRef = useRef(null);
  // `isVisible` state ab yeh track karega ki section viewport mein dikh raha hai ya nahi
  const [isVisible, setIsVisible] = useState(false); 

  // IntersectionObserver ka use karke element ki visibility track karein
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // `isVisible` state ko `entry.isIntersecting` ke basis par update karein
        // Jab viewport mein aaye (true) ya viewport se bahar jaaye (false)
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        // Threshold 0.2 ka matlab hai jab element ka 20% dikhe
        threshold: 0.2 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Component unmount hone par observer ko clean karein
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Dependency array ab empty hai, jisse effect sirf ek baar chalta hai component mount hone par

  // Skills data with corresponding Lucide React icons
  const skills = [
    { name: "ReactJS", icon: Atom },
    // { name: "ExpressJS", icon: Server },
    { name: "NodeJS", icon: Cloud },
    // { name: "Redux", icon: Package },
    { name: "Bootstrap", icon: Feather },
    { name: "CSS3", icon: Palette },
    { name: "JavaScript", icon: Code },
    { name: "Java", icon: Coffee },
    { name: "Python", icon: Pipette },
    // { name: "C++", icon: Cpu },
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
    // { name: "AWS", icon: Cloud },
    // { name: "Heroku", icon: Rocket },
    { name: "Netlify", icon: Globe },
    // { name: "JQuery", icon: Zap },
    // { name: "Git VCS", icon: GitFork },
    { name: "GitHub", icon: Github },
  ];

  return (
    // About section ka main container
    // Background colors ko white (light mode) aur black (dark mode) kiya gaya hai
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-white text-gray-900 p-8 font-inter
                    dark:bg-black dark:text-white transition-colors duration-500"
    >
      {/* Content wrapper with animation */}
      {/* `isVisible` state ke basis par opacity aur transform classes apply karein */}
      {/* `delay-300` class add ki gayi hai takki text thoda der se dikhe */}
      <div className={`max-w-4xl mx-auto text-center py-20
                       transition-opacity transform duration-1000 ease-out delay-300
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section heading with User icon */}
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-10 flex items-center justify-center space-x-4
                       dark:text-yellow-600">
          <User size={40} className="text-gray-800 dark:text-gray-200" /> {/* Icon color adjusted for dark mode */}
          <span>About Me</span>
        </h2>

        {/* Profile Photo Section */}
        <div className="mb-12 flex justify-center items-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-500 transform transition duration-500 hover:scale-105
                          dark:border-yellow-600">
            <img
              src="/images/cc.jpg" // Aapki photo ka URL, ensure public/images/alokk.jpg mein hai
              alt="Your Profile"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/256x256/808080/FFFFFF?text=Image+Error"; }}
            />
          </div>
        </div>

        {/* Paragraphs */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4
                      dark:text-gray-300"> {/* Paragraph text color adjusted */}
          I'm a Web Developer building and managing the Front-end of Websites and Web Applications. that leads to the success of the overall product. Check out some of my work in the Projects section.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed
                      dark:text-gray-300"> {/* Paragraph text color adjusted */}
          My expertise lies in crafting dynamic and responsive web applications using modern technologies, ensuring a seamless user experience across all devices.
        </p>

        {/* Skills section */}
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-yellow-300 mb-5
                         dark:text-yellow-500">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 hover:text-gray-900 transition duration-300
                           dark:bg-gray-800 dark:text-white dark:hover:bg-yellow-600 dark:hover:text-white
                           flex items-center space-x-2" // Skill background and text colors adjusted
              >
                {skill.icon && <skill.icon size={20} />}
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
