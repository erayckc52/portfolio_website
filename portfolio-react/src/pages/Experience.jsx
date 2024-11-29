import React, { useState } from 'react';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  const [activeSection, setActiveSection] = useState('workExperience');

  const workExperienceContent = (
    <>
      <h2>Work Experience</h2>
      <p>
        <strong>Web Developer Intern at Frontier Software: </strong> 
        <li>Focused on front-end development tasks by implementing and integrating navigation elements into the existing system.</li>
        <li>Edited CSS files to maintain design consistency and ensure an intuitive user experience across different devices.</li>
        <li>Contributed to routing functionalities ensuring smooth and efficient page transitions.</li>
        <li>Collaborated closely with the team in an Agile working environment participating in two week sprints and managing PBIs to meet deadlines.</li>
        <li>Strengthened my problem solving skills and gained hands on exposure to the best practices in front-end development.</li>
      </p>
      <p>
        <strong>Technical Support Consultant at Frontier Software: </strong>
        <li>Supported internal and external clients by troubleshooting technical issues in software systems.</li>
        <li>Played a key role in diagnosing and resolving software bugs ensuring smooth operations for end users.</li>
        <li>Primarily worked with SQL and Oracle databases to maintain and improve system functionality.</li>
        <li>Enhanced my ability to analyze complex systems and provide timely solutions in high pressure environments.</li>
      </p>
    </>
  );

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

  return (
    <div className={styles.experiencePage}>
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

export default Experience;