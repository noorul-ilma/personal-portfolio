import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaDownload,FaEnvelope,FaInstagram  } from "react-icons/fa";
import "./About.css"; 
import SectionDivider from './SectionDivider'; 
import resume from '/public/resume.pdf';

function About() {
  const roles = [
    "Public Health Specialist",
    "Health Promotion Expert",
    "Researcher",
    "Community Health Advocate",
    "Epidemiologist"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    
    <section>
          <div className="about-container">
        
        {/* Left Section: Content */}
        <div className="about-content">
        <h2 className="intro">
            Hi, I’m <span className="name">NOORUL
            ILMA</span> I work as
          </h2>
          <h4 className="role">{roles[currentRoleIndex]}</h4>
          <p className="description">
          An enthusiastic and results-driven recent graduate with a Bachelor of Science in Health Promotion. Brings strong communication and teamwork abilities developed through meaningful volunteer experiences. Passionate about promoting well-being and eager to contribute to health-focused initiatives. Known for taking initiative and thriving in collaborative environments.
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/noorul-ilma-1a2939314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="socialmedia-icon"><FaLinkedin /></a>
            <a href="https://www.facebook.com/share/15BoJqFxVZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="socialmedia-icon"><FaFacebook /></a>
            <a href="https://www.instagram.com/ilma.noorul?igsh=NG5pY2MzY28xbWFq&utm_source=qr"  target="_blank" rel="noopener noreferrer" className="socialmedia-icon"><FaInstagram /></a>
            <a href="ilmanoorul@gmail.com" className="socialmedia-icon">
    <FaEnvelope />
  </a>
          </div>

          <a href={resume} download className="download-btn">
  <FaDownload /> Download Resume
</a>

        </div>

        {/* Right Section: Image */}
        <div className="image-container">
            <div className="image-wrapper">
                <img src="./sample.jpeg" alt="Profile" className="profile-img" />
  </div>
        </div>

       

      </div>

      <SectionDivider />
    </section>
      
    
  );
}

export default About;
