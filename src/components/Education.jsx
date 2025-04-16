import React, { useState } from "react";
import { FaUniversity, FaGraduationCap, FaBookReader } from "react-icons/fa";
import './Education.css';
import './style.css';
import SectionDivider from './SectionDivider';

const educationData = [
  {
    year: "2021 - 2024",
    title: "B.Sc in Health Promotion",
    institution: "Rajarata University of Sri Lanka",
    icon: <FaUniversity />,
    description: "Currently pursuing a Bachelor's degree in Health Promotion, focusing on public health, community health, and health education."
  },
  {
    year: "2019 - 2020",
    title: "Diploma in Information Technology (IT)",
    institution: "Ministry of Telecommunication",
    icon: <FaGraduationCap />,
    description: "Completed a comprehensive IT diploma program covering software development, networking, and system administration."
  },
  {
    year: "2021",
    title: "Diploma in English",
    institution: "Rajarata University of Sri Lanka",
    icon: <FaBookReader />,
    description: "Enhanced English language proficiency through an intensive diploma program focusing on communication and academic writing."
  },
  {
    year: "Induction into the Intensive",
    title: "U.S. Embassy – Colombo",
    institution: "",
    icon: <FaUniversity />,
    description: "Participated in a specialized program organized by the U.S. Embassy focusing on professional development and cultural exchange."
  },
  {
    year: "2024 - 2025",
    title: "Diploma in Human Resource Management",
    institution: "Casted Institute",
    icon: <FaGraduationCap />,
    description: "Developed key competencies in HR functions such as recruitment, training and development, performance management, and organizational behavior."
  },
  {
    year: "2024 - 2025",
    title: "Diploma in Psychology",
    institution: "Casted Institute",
    icon: <FaGraduationCap />,
    description: "Explored fundamental concepts in psychology including cognitive behavior, mental health, and human development."
  },
  {
    year: "GCE - Advanced Level",
    title: "Sri Lanka",
    institution: "",
    icon: <FaGraduationCap />,
    description: "Completed Advanced Level examinations with a focus on science subjects, achieving excellent academic results."
  },
  {
    year: "GCE - Ordinary Level",
    title: "Sri Lanka",
    institution: "",
    icon: <FaBookReader />,
    description: "Successfully completed Ordinary Level examinations with distinction in multiple subjects."
  },
];

function Education() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="education-container">
      <div className="title-container">
        <span className="icon-wrapper">
          <FaGraduationCap className="title-icon" />
        </span>
        <h2 className="title">Education</h2>
        <div className="underline"></div>
      </div>

      <div className="education-cards-container">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`education-card ${expandedCard === edu.title ? 'expanded' : ''}`}
            onClick={() => handleCardClick(edu.title)}
          >
            <div className="education-card-inner">
              <div className="education-card-front">
                <div className="education-icon">{edu.icon}</div>
                <h3 className="education-year">{edu.year}</h3>
                <h4 className="education-card-title">{edu.title}</h4>
              </div>
              <div className="education-card-back">
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionDivider />
    </section>
  );
}

export default Education;
