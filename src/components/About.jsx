// src/components/About.jsx

import React, { useRef, useEffect, useState } from "react";
import {
  User,
  Atom,
  Cloud,
  Feather,
  Palette,
  Code,
  Coffee,
  Pipette,
  Database,
  Globe,
  Github,
} from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "ReactJS", icon: Atom },
    { name: "NodeJS", icon: Cloud },
    { name: "Bootstrap", icon: Feather },
    { name: "CSS3", icon: Palette },
    { name: "JavaScript", icon: Code },
    { name: "Java", icon: Coffee },
    { name: "Python", icon: Pipette },
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Netlify", icon: Globe },
    { name: "GitHub", icon: Github },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 bg-white dark:bg-black"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-yellow-500">
            <User size={35} />
            About Me
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* Left Side Content */}
          <div className="md:w-1/2">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
             As a Web Developer, I specialize in designing and developing modern, 
             responsive, and performance-driven web applications. 
             I combine creativity with technical expertise to build intuitive digital experiences 
             that are visually engaging, highly functional, and optimized for users across all devices.
            </p>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              My goal is to create solutions that not only look great but also contribute to business growth and product success.
               Explore my projects to discover how I bring ideas to life through code and innovation.
            </p>

            {/* Skills */}
            <div className="mt-10">
              <h3 className="text-3xl font-semibold text-yellow-500 mb-6">
                Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="
                      flex items-center gap-2
                      bg-gray-200 dark:bg-gray-800
                      text-gray-800 dark:text-white
                      px-4 py-2 rounded-full
                      shadow-md
                      hover:bg-yellow-500
                      hover:text-black
                      dark:hover:bg-yellow-600
                      dark:hover:text-white
                      transition-all duration-300
                    "
                  >
                    {skill.icon && <skill.icon size={18} />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 flex justify-center">
            <div
              className="
                relative
                w-60 h-60
                md:w-80 md:h-80
                rounded-full
                overflow-hidden
                border-4 border-yellow-500
                shadow-[0_0_40px_rgba(234,179,8,0.4)]
                hover:scale-105
                transition-all duration-500
              "
            >
              <img
                src="/images/cc.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x400/808080/FFFFFF?text=Image+Error";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
