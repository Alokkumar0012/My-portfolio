// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Hero component jahan particles honge
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// ParticlesBackground ko ab yahan import nahi kiya ja raha hai kyunki woh Hero.jsx mein hoga

function App() {
  return (
    // Main container for the entire application
    // Yeh div poori app ka background aur font set karega.
    // 'overflow-x-hidden' rakha gaya hai horizontally scrolling ko rokne ke liye.
    // Dark mode classes lagatar hain.
    <div className="min-h-screen bg-gray-950 text-gray-200 font-inter overflow-x-hidden
                    dark:bg-gray-50 dark:text-gray-900 transition-colors duration-500">

      {/* !!! YAHAN PAR 'relative z-10' HATA DIYA GAYA HAI !!! */}
      {/* Ab yeh div ParticlesBackground ke liye positioning context nahi banega,
          aur ParticlesBackground sirf Hero ke andar hi confined rahega. */}
      <div> {/* <-- Is div par ab koi positioning class nahi hai. */}
        <Navbar />
        <main className="pt-16">
          <Hero /> {/* Hero component mein ab particles honge */}
          <About />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
