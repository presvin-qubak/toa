
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
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

  if (!visible) return null;

  return (
    <button
      className="scroll-top-button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}

export default ScrollToTopButton;
