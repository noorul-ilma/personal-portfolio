import { Container } from 'react-bootstrap'
import { FaBriefcase, FaBuilding, FaChild, FaHeartbeat, FaUsersCog, FaGraduationCap, FaBriefcaseMedical, FaUserShield } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { useState } from 'react'
import './Experience.css'
import SectionDivider from './SectionDivider'

function Experience() {
  const [expandedRole, setExpandedRole] = useState(null);

  const experiences = [
    {
      id: 'childProtectionAuthority',
      title: 'Trainee & University Ambassador',
      company: 'Child Protection Authority',
      period: '2024',
      icon: <FaUserShield />, // You can choose a suitable icon here
      description: 'Worked as a trainee and university ambassador focusing on child welfare and protection initiatives.',
      details: [
        'Assisted in organizing awareness programs on child rights and protection.',
        'Acted as a liaison between the university and the authority to promote student involvement.',
        'Participated in planning and implementing child-centered interventions.'
      ],
      color: '#FF8C00'
    },
    {
      id: 'stJohnAmbulance',
      title: 'Volunteer - First Aid Provider',
      company: "St. John's Ambulance",
      period: '2023',
      icon: <FaBriefcaseMedical />,
      description: 'Volunteered in first aid training and emergency medical response activities.',
      details: [
        'Provided first aid support during events and emergencies.',
        'Completed certified training in first aid procedures.',
        'Engaged in public health outreach programs.'
      ],
      color: '#32CD32'
    },
    {
      id: 'hrTrainee',
      title: 'HR Trainee',
      company: 'Hearty and Care International Pvt Ltd',
      period: 'Year not specified',
      icon: <FaUsersCog />,
      description: 'Worked as an HR Trainee gaining foundational experience in human resources and organizational support.',
      details: [
        'Assisted with recruitment, onboarding, and HR documentation.',
        'Supported internal communication and team coordination efforts.',
        'Contributed to employee engagement and training programs.'
      ],
      color: '#1E90FF'
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
            <h2 className="title">Experience</h2>
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
                  style={{ '--marker-color': exp.color }}
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

                  <div className="role-description">
                    <p>{exp.description}</p>
                  </div>

                  <div className={`role-details ${expandedRole === exp.id ? 'show' : ''}`}>
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
  );
}

export default Experience;
