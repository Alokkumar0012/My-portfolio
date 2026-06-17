import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-yellow-500
        hover:bg-yellow-400
        text-black
        p-4
        rounded-full
        shadow-lg
        hover:scale-110
        transition-all
        duration-300
      "
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
