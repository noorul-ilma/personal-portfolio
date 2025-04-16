import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Function to scroll smoothly to the section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobile(false); // Close menu after clicking
    }
  };

  // Function to detect the active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "experience", "galary", "skills"];
      let currentSection = "";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">NOORUL
      ILMA</h2>

      {/* Hamburger Icon for Mobile */}
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={isMobile ? "nav-links mobile-nav" : "nav-links"}>
        <li><a href="#about" className={activeSection === "about" ? "active" : ""} onClick={() => scrollToSection("about")}>About</a></li>
        <li><a href="#education" className={activeSection === "education" ? "active" : ""} onClick={() => scrollToSection("education")}>Education</a></li>
        <li><a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={() => scrollToSection("experience")}>Experience</a></li>
        <li><a href="#galary" className={activeSection === "galary" ? "active" : ""} onClick={() => scrollToSection("galary")}>Gallery</a></li>
        <li><a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={() => scrollToSection("skills")}>Skills</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
