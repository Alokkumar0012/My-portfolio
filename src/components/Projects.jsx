// src/components/Projects.jsx
import React, { useRef, useEffect, useState } from "react";
// Lucide React se Laptop icon import karein
import { Laptop } from 'lucide-react';

// Ek alag component banate hain har Project Card ke liye
// Taki har card apni animation state ko manage kar sake
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // `isVisible` state ko `entry.isIntersecting` ke basis par update karein
        // Ab observer ko unobserve nahi karenge, takki woh baar-baar trigger ho sake
        setIsVisible(entry.isIntersecting);
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
  }, []); // isVisible dependency ko hata diya gaya hai, takki effect sirf ek baar mount par chale


  // Animation classes aur dynamic delay add karein
  // Delay calculation: index * 100ms (har agla card 100ms der se dikhega)
  // Transition duration ko 'duration-500' kar diya gaya hai takki motion fast ho
  const animationClasses = `
    transition-opacity transform duration-500 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    delay-${index * 100}
  `; // Delay classes ko Tailwind config mein define karne ki zarurat pad sakti hai agar default delays kafi na hon

  return (
    <div
      ref={cardRef} // Har card ka apna ref
      key={project.id}
      className={`
        bg-gray-200 p-6 rounded-xl shadow-xl flex flex-col h-full transform transition duration-300 hover:scale-105 hover:shadow-2xl
        dark:bg-gray-800 dark:text-white dark:hover:shadow-lg
        ${animationClasses}
      `}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4 shadow-md"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/374151/D1D5DB?text=Image+Not+Found"; }}
      />
      <h3 className="text-2xl font-semibold mb-3 text-yellow-700 dark:text-yellow-500">{project.title}</h3>
      <p className="text-gray-700 text-base mb-5 flex-grow dark:text-gray-300">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-yellow-500 text-gray-900 font-bold py-2 px-5 rounded-full shadow-md
                   hover:bg-yellow-400 transition duration-300 ease-in-out text-sm
                   dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:text-white"
      >
        View Project
      </a>
    </div>
  );
};


const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Blogging ",
      description: "Discover a sleek, modern blogging platform built for simplicity and speed",
      link: "https://blogger-nu-lime.vercel.app/",
      image: "./images/a.png" // Placeholder image
    },
    {
      id: 2,
      title: "ALONEFoodies",
      description: "A modern restaurant website built with HTML,CSS and Javascript, offering a clean and appetizing user experience.",
      link: "https://restaurant-alpha-ruddy.vercel.app/",
      image: "./images/b.png" // Placeholder image
    },
    {
      id: 3,
      title: "Blackjack Game",
      description: "A sleek, interactive Blackjack game built play instantly with smooth UI and responsive logic",
      link: "https://blackjack-sable-theta.vercel.app/",
      image: "./images/c.png" // Placeholder image
    },
    {
        id: 4,
        title: "chatwadi",
        description: "A real-time chat application built with React.",
        link: "https://chatwadi.vercel.app/",
        image: "./images/d.png" // Placeholder image
      },
      // {
      //   id: 4,
      //   title: "chatwadi",
      //   description: "A real-time chat application built with React.",
      //   link: "https://chatwadi.vercel.app/",
      //   image: "./images/d.png" // Placeholder image
      // },
    {
      id: 5,
      title: "Top Ten Classes",
      description: "We are committed to providing the best education..",
      link: "https://your-link.com",
      image: "./images/e.png" // Apni image ka sahi path dein
    },
    {
      id: 6,
      title: "Ek Aur Project",
      description: "Apne chathe (6th) project ki details yahan likhein.",
      link: "https://your-link.com",
      image: "./images/f.png" // Apni image ka sahi path dein
    },
  ];
  ];

  return (
    // Projects section ka main container
    // Background colors ko white (light mode) aur black (dark mode) kiya gaya hai
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-white text-gray-900 p-8 font-inter
                    dark:bg-black dark:text-white transition-colors duration-500"
    >
      {/* Content wrapper. Ab is wrapper par animation nahi hai. */}
      <div className={`max-w-6xl mx-auto text-center py-20`}>
        {/* Section heading with Laptop icon */}
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 flex items-center justify-center space-x-4
                       dark:text-yellow-600">
          <Laptop size={40} className="text-gray-800 dark:text-gray-200" /> {/* Laptop icon add kiya gaya hai */}
          <span>My Projects</span>
        </h2>

        {/* Projects details grid/list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Har card ko ProjectCard component mein render karein
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
