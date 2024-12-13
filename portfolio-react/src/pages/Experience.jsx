import React, { useState } from 'react';
import styles from '../styles/Experience.module.css';
import bgVideo from '../assets/videos/bg-wp4.mp4';

// Defining Experience functional component
const Experience = () => {
  // Tracking current active section
  const [activeSection, setActiveSection] = useState('workExperience');

  // Content for work experience section
  const workExperienceContent = (
    <>
      <h2>Work Experience</h2>
      <p>
        <strong>Web Developer Intern at Frontier Software:</strong>
        <li>Developed front-end features including navigation elements and routing functionalities.</li>
        <li>Optimized CSS for consistent design and responsiveness across devices and platforms.</li>
        <li>Collaborated in Agile sprints, managing PBIs and meeting deadlines.</li>
      </p>
      <p>
        <strong>Technical Support Consultant at Frontier Software:</strong>
        <li>Resolved technical issues and software bugs for clients ensuring smooth operations.</li>
        <li>Maintained and optimized SQL and Oracle databases for improved functionality.</li>
        <li>Delivered timely solutions under high-pressure scenarios, enhancing problem-solving skills.</li>
      </p>
    </>
  );

  // Content for technical skills section
  const technicalSkillsContent = (
    <>
  <h2>Technical Skills</h2>
  <div className={styles.skillsGrid}>
    <div className={styles.card}>
      <h3>Languages</h3>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Java</li>
        <li>C#</li>
        <li>PHP</li>
        <li>Ruby</li>
        <li>Rust</li>
        <li>Go</li>
        <li>C++</li>
        <li>Swift</li>
        <li>SQL</li>
      </ul>
    </div>
    <div className={styles.card}>
      <h3>Front-End</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Angular</li>
        <li>Vue.js</li>
      </ul>
    </div>
    <div className={styles.card}>
      <h3>Back-End</h3>
      <ul>
        <li>Node.js</li>
        <li>.NET</li>
        <li>SQL (SQL Server, Oracle)</li>
        <li>RESTful APIs</li>
      </ul>
    </div>
    <div className={styles.card}>
      <h3>Tools</h3>
      <ul>
        <li>Docker</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>VS Code</li>
      </ul>
    </div>
    <div className={styles.card}>
      <h3>Databases</h3>
      <ul>
        <li>SQL Server</li>
        <li>Oracle</li>
        <li>Database Optimization</li>
      </ul>
    </div>
    <div className={styles.card}>
      <h3>Other Skills</h3>
      <ul>
        <li>Agile Methodologies</li>
        <li>Scrum Practices</li>
        <li>CI/CD Pipelines</li>
      </ul>
    </div>
  </div>
</>
  );

  // Rendering Experience component
  return (
    <div className={styles.experiencePage}>

      {/*Video Background*/}
      <video autoPlay muted loop className={styles.videoBackground}>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.leftPanel}>
        <button
          className={`${styles.button} ${
            activeSection === 'workExperience' ? styles.active : ''
          }`}
          onClick={() => setActiveSection('workExperience')}
        >
          Work Experience
        </button>
        <button
          className={`${styles.button} ${
            activeSection === 'technicalSkills' ? styles.active : ''
          }`}
          onClick={() => setActiveSection('technicalSkills')}
        >
          Technical Skills
        </button>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.contentBox}>
          {activeSection === 'workExperience'
            ? workExperienceContent
            : technicalSkillsContent}
        </div>
      </div>
    </div>
  );
};

// Exporting Experience component for usage outside
export default Experience;
