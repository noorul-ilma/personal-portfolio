import React, { useState, useEffect } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaDownload,FaEnvelope  } from "react-icons/fa";
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
            <a href="https://www.linkedin.com/in/yalini-thevarajan-ba737233b/" target="_blank" rel="noopener noreferrer" className="socialmedia-icon"><FaLinkedin /></a>
            <a href="https://www.facebook.com/yaly.yaly.16718?mibextid=wwXIfr&rdid=HRmwGJfpF4FTr7FY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16Ng18X5fR%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="socialmedia-icon"><FaFacebook /></a>
            <a href="#"  target="_blank" rel="noopener noreferrer" className="socialmedia-icon"><FaTwitter /></a>
            <a href="mailto:yalinithevarajan@gmail.com" className="socialmedia-icon">
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
