import React from 'react';

function Terms() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Yalini Thevarajan – Profile Overview</h1>
      
      <section style={styles.section}>
        <h2>About Me</h2>
        <p>
          I am a hard-working, resilient individual with a sound knowledge of Public Health and Health Promotion.
          My degree has given me insight into health issues faced by communities and the factors influencing health outcomes.
          I have significant experience in research and data analytics and am good at understanding and relating to people's concerns.
          I aim to use my knowledge and skills to improve the status of communities in underprivileged areas.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Experience</h2>
        <ul>
          <li>2 years field experience in Health Promotion intervention (2022–2024)</li>
          <li>6 months experience as a coordinator at the Hindu Buddhist Association</li>
          <li>1 year experience as a teacher at Access Academy, Tharmapuram</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Education</h2>
        <ul>
          <li>BSc in Health Promotion – Rajarata University of Sri Lanka</li>
          <li>Diploma in English (R)</li>
          <li>Diploma in Sinhala (R)</li>
          <li>G.C.E. A/L – Chemistry (C), Biology (S), Physics (S), English (A)</li>
          <li>G.C.E. O/L – Mathematics (A), English (A), Tamil (A), Science (B), Commerce (A), Health & P.E. (A), Tamil Literature (A), History (A), Religion (A)</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Skills</h2>
        <ul>
          <li>Decision making and problem solving</li>
          <li>Data collection and interpretation</li>
          <li>Report writing</li>
          <li>Microsoft Office</li>
          <li>Communication skills</li>
          <li>Community facilitation</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Languages</h2>
        <ul>
          <li>Tamil – Excellent</li>
          <li>English – Good</li>
          <li>Sinhala – Fair</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Volunteer Work</h2>
        <ul>
          <li>Member – Health Promotion Media, Dept. of Health Promotion (2024–2025)</li>
          <li>Member – Health Promotion Society, Rajarata University (2022–2025)</li>
          <li>Member – St. John Ambulance Service</li>
          <li>Student Ambassador – NCPA</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Contact</h2>
        <p>Phone: 0769282201</p>
        <p>Email: yalinithevarajan@gmail.com</p>
        <p>Address: No-21, Kanaan, Nagenthirapuram, Puliyampokkanai</p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#2c3e50'
  },
  section: {
    marginBottom: '1.5rem'
  }
};

export default Terms;
