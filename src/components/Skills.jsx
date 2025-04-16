import React from 'react'
import { Container } from 'react-bootstrap'
import { 
  FaCode, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt,
  FaBootstrap,
  FaPaintBrush,
  FaChalkboardTeacher, 
  FaUsers, 
  FaBook, 
  FaLanguage, 
  FaBrain,
  FaCogs ,
  FaHandsHelping,
  FaChartLine,
  FaTasks,
  FaBullhorn,
  FaHandshake,
  FaLightbulb,
  FaUserTie
} from 'react-icons/fa'
import { 
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiFigma,
  SiCanva 
} from 'react-icons/si'
import './Skills.css'
import SectionDivider from './SectionDivider';


function Skills() {
  const technicalSkills = [
    {
      name: "English",
      level: 80,  // Adjust the level as needed
      description: "Good proficiency in English",
      icon: <FaLanguage className="icon-english" />
    },
    {
      name: "Tamil",
      level: 90,  // Adjust the level as needed
      description: "Excellent proficiency in Tamil",
      icon: <FaLanguage className="icon-tamil" />
    },
    {
      name: "Sinhala",
      level: 50,  // Adjust the level as needed
      description: "Fair proficiency in Sinhala",
      icon: <FaLanguage className="icon-sinhala" />
    }
  ]

  const teachingSkills = [
    {
      name: "Management Skills",
      level: 90,
      icon: <FaTasks />,
      description: "Effectively managing tasks, teams, and resources to achieve goals"
    },
    {
      name: "Creativity",
      level: 88,
      icon: <FaPaintBrush />,
      description: "Generating innovative ideas and solutions in dynamic environments"
    },
    {
      name: "Digital Marketing",
      level: 85,
      icon: <FaBullhorn />,
      description: "Understanding digital channels to create and implement marketing strategies"
    },
    {
      name: "Negotiation",
      level: 87,
      icon: <FaHandshake />,
      description: "Skilled in reaching mutually beneficial agreements through effective communication"
    },
    {
      name: "Critical Thinking",
      level: 92,
      icon: <FaLightbulb />,
      description: "Analyzing situations logically to make sound and strategic decisions"
    },
    {
      name: "Leadership",
      level: 93,
      icon: <FaUserTie />,
      description: "Inspiring and guiding individuals or teams toward successful outcomes"
    }
    
  ]

  return (
    <section id="skills" className="skills-section">
      <Container>
 

        <div className="section-title-wrapper" style={{ marginTop: '1rem' }}>
           <div className="title-container">
                      <span className="icon-wrapper">
                          <FaCogs    className="title-icon" />
                      </span>
                      <h2 className="title">Core Skills </h2>
                      <div className="underline"></div>
                  </div>
        </div>
        <div className="teaching-skills-grid">
          {teachingSkills.map((skill, index) => (
            <div key={index} className="teaching-skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-content">
                <h3 className="skill-title">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-progress-container">
                  <div 
                    className="skill-progress-bar" 
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="progress-label">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title-wrapper">
        <div className="title-container">
                      <span className="icon-wrapper">
                          <FaLanguage className="title-icon" />
                      </span>
                      <h2 className="title">Language Skills </h2>
                      <div className="underline"></div>
                  </div>
        </div>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-circle">
              <div className="circle-progress" style={{ '--percentage': `${skill.level}%` }}>
                <div className="inner-circle">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </Container>
      <SectionDivider />
    </section>
  )
}

export default Skills