import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';
import portfolioImage from '../assets/images/portfolio-animated.gif';
import bgVideo from '../assets/videos/bg-wp3.mp4';

// Defining the Projects functional component
const Projects = () => {
  // State to track active project displayed
  const [activeProject, setActiveProject] = useState('portfolio');

  // Object containing details of all projects
  const projects = {
    // Information on portfolio project
    portfolio: {
      title: 'Personal Portfolio Website',
      description: `
        This portfolio website encompasses all of my professional experience and my own learnings into one visualised place.
        The portfolio itself has been constructed into a simple format, yet easily readable and understandable for the user.
      `,
      features: `
        The portfolio includes sections for About Me, Experience, Projects and Contact where each showcase dynamic content with 
        smooth navigation and responsive design principles.
      `,
      technologies: `
        It has been built using React.js for dynamic components, CSS for styling and EmailJS for form submissions.
      `,
      challenges: [
        'Balancing aesthetics and usability to create an intuitive design.',
        'Ensuring responsive design across various screen sizes and devices.',
        'Implementing secure form submissions using EmailJS while preventing vulnerabilities.',
        'Debugging and optimizing dynamic state based components for better user experience.',
        'Creating a visually engaging and professional layout for project presentation.'
      ],
      image: portfolioImage,
    },
    // Placeholder for future projects (To Be Determined)
    tbd: {
      title: 'TBD',
      description: `
        
      `,
      features: `
        
      `,
      technologies: `
        
      `,
      challenges: [
        ''
      ],
    },
  };

  // Function to render the details of the active project
  const renderProjectDetails = () => {
    // Retrieve the active projects details
    const project = projects[activeProject];
    return (
      <div className={styles.projectDetails}>
        <div className={styles.leftColumn}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <h3>Key Features:</h3>
          <p>{project.features}</p>
          <h3>Technologies Used:</h3>
          <p>{project.technologies}</p>
          <h3>Challenges Overcome:</h3>
          <ul>
          {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
          ))}
          </ul>
        </div>

        <div className={styles.rightColumn}>
          <img
            src={project.image}
            alt={`${project.title} Preview`}
            className={styles.projectImage}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.projectsPage}>
      
      {/*Video Background*/}
      <video autoPlay muted loop className={styles.videoBackground}>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/*Buttons to toggle between different projects*/}
      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.button} ${activeProject === 'portfolio' ? styles.active : ''}`}
          onClick={() => setActiveProject('portfolio')}
        >
          Portfolio Website
        </button>
        <button
          className={`${styles.button} ${activeProject === 'tbd' ? styles.active : ''}`}
          onClick={() => setActiveProject('tbd')}
        >
          TBD
        </button>
        <button
          className={`${styles.button} ${activeProject === 'tbd' ? styles.active : ''}`}
          onClick={() => setActiveProject('tbd')}
        >
          TBD
        </button>
      </div>

      {/*Rendering details of the active project*/}
      {renderProjectDetails()}
    </div>
  );
};

// Exporting Projects component for usage outside
export default Projects;
