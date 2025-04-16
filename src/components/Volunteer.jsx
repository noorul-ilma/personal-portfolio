import { Container } from 'react-bootstrap'
import { FaBriefcase, FaBuilding, FaChild, FaHeartbeat } from 'react-icons/fa';
import { FaHandsHelping, FaUserTie, FaAmbulance } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { useState } from 'react'
import './Experience.css'
import SectionDivider from './SectionDivider';



function Volunteer() {
  const [expandedRole, setExpandedRole] = useState(null);

  const experiences = [
    {
        id: 'healthPromotionMedia',
        title: 'Member of Health Promotion Media',
        company: 'Department of Health Promotion',
        period: '2024 - 2025',
        icon: <FaHeartbeat />,
        description: 'Active member of the Health Promotion Media team, creating content to raise awareness about public health issues.',
        details: [
          'Developed media campaigns for health promotion programs.',
          'Created engaging content for social media and online platforms.',
          'Collaborated with other departments to align messaging with public health goals.',
        ],
        color: '#27AE60'
      },
      {
        id: 'healthPromotionSociety',
        title: 'Member of Health Promotion Society',
        company: 'Rajarata University of Sri Lanka',
        period: '2022 - 2025',
        icon: <FaHandsHelping />,
        description: 'Contributed to the Health Promotion Society, working on various public health initiatives and community engagement projects.',
        details: [
          'Organized community-based health programs and events.',
          'Participated in health surveys and research projects.',
          'Assisted in the development of educational materials for health awareness campaigns.',
        ],
        color: '#E74C3C'
      },
      {
        id: 'stJohnAmbulance',
        title: 'Member of St. John Ambulance Service',
        company: 'St. John Ambulance Service',
        period: '2022 - Present',
        icon: <FaAmbulance />,
        description: 'Volunteered with St. John Ambulance, providing first aid and emergency medical services in community events.',
        details: [
          'Trained in first aid, CPR, and emergency medical response.',
          'Provided on-site first aid assistance at local events and gatherings.',
          'Worked with a team of medical professionals to ensure public safety at events.',
        ],
        color: '#F39C12'
      },
      {
        id: 'ncpaAmbassador',
        title: 'University Student Ambassador',
        company: 'National Child Protection Authority (NCPA)',
        period: '2024 - 2025',
        icon: <FaUserTie />,
        description: 'Represented NCPA at university events, promoting child protection and safety within the community.',
        details: [
          'Led awareness campaigns on child protection within the university.',
          'Organized seminars and workshops on child rights and safety.',
          'Collaborated with NCPA to develop educational content for students.',
        ],
        color: '#8E44AD'
      },
      {
        id: 'ncpaLeadership',
        title: 'District Leader - NCPA',
        company: 'National Child Protection Authority, Kilinochchi District',
        period: 'Ongoing',
        icon: <FaBuilding />,
        description: 'Leadership role in promoting child rights and protection initiatives at the district level.',
        details: [
          'Coordinated awareness programs on child protection and safety.',
          'Led district-level campaigns and training workshops in collaboration with schools and local authorities.',
          'Acted as a liaison between the NCPA and community stakeholders.',
          'Promoted youth engagement and advocacy for child rights in rural areas.'
        ],
        color: '#E67E22'
      }
  ];
  

  return (

    <section>
    <section id="experience" className="experience-section">
      <Container>
      <div className="title-container">
            <span className="icon-wrapper">
                <FaBriefcase className="title-icon" />
            </span>
            <h2 className="title">Volunteer Experience</h2>
            <div className="underline"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
  <div 
    key={exp.id}
    className={`timeline-item ${expandedRole === exp.id ? 'expanded' : ''}`}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div 
      className="timeline-marker"
      style={{'--marker-color': exp.color}}
      onClick={() => setExpandedRole(expandedRole === exp.id ? null : exp.id)}
    >
      <div className="marker-icon">
        {exp.icon}
      </div>
      <div className="marker-pulse"></div>
    </div>

    <div className="timeline-content">
      <div className="role-header">
        <h3>{exp.title}</h3>
        <div className="company-info">
          <span className="company-name">
            <MdLocationOn /> {exp.company}
          </span>
          <span className="period">
            <BiTimeFive /> {exp.period}
          </span>
        </div>
      </div>

      {/* Insert description here */}
      <div className="role-description">
        <p>{exp.description}</p>
      </div>

      <div className="role-details">
        <ul className="responsibilities">
          {exp.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
))}

        </div>
      </Container>
      
    </section>
    <SectionDivider />
    </section>
  )
}

export default Volunteer