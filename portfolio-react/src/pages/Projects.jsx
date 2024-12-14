import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';
import portfolioImage from '../assets/images/portfolio-pages.png';
import bgVideo from '../assets/videos/bg-wp3.mp4';
import 'animate.css';

// Defining the Projects functional component
const Projects = () => {
  // State to track active project displayed
  const [activeProject, setActiveProject] = useState('portfolio');
   // State for animation class
  const [animationClass, setAnimationClass] = useState('animate__fadeIn');

  // Object containing details of all projects
  const projects = {
    // Information on portfolio project
    portfolio: {
      title: 'Personal Portfolio Website',
      description: `
        A central hub showcasing my professional journey, technical skills and projects,
        designed with simplicity and user-friendliness in mind.
      `,
      features: (
        <ul>
          <li>- Interactive sections for About Me, Experience, Projects, and Contact.</li>
          <li>- Smooth navigation and responsive design for seamless access across devices.</li>
        </ul>
      ),
      technologies: `
        Built with React.js for dynamic components, styled using CSS and powered by EmailJS for efficient form handling.
      `,
      challenges: (
        <ul>
          <li>- Creating a balance between aesthetic appeal and functionality.</li>
          <li>- Ensuring a responsive and intuitive experience across all screen sizes.</li>
          <li>- Securing data submissions and optimizing for performance.</li>
        </ul>
      ),
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

  // Function to handle project change and re-trigger animation
  const handleProjectChange = (project) => {
    setAnimationClass('');
    setTimeout(() => setAnimationClass('animate__fadeIn'), 0);
    setActiveProject(project);
  };

  // Function to render the details of the active project
  const renderProjectDetails = () => {
    // Retrieve the active projects details
    const project = projects[activeProject];
    return (
      <div className={`${styles.projectDetails} animate__animated ${animationClass}`}>
        <div className={styles.leftColumn}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <h3>Key Features:</h3>
          <p>{project.features}</p>
          <h3>Technologies Used:</h3>
          <p>{project.technologies}</p>
          <h3>Challenges Overcome:</h3>
          <p>{project.challenges}</p>
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
          onClick={() => handleProjectChange('portfolio')}
        >
          Portfolio Website
        </button>
        <button
           className={`${styles.button} ${activeProject === 'tbd' ? styles.active : ''}`}
           onClick={() => handleProjectChange('tbd')}
        >
          TBD
        </button>
        <button
          className={`${styles.button} ${activeProject === 'tbd' ? styles.active : ''}`}
          onClick={() => handleProjectChange('tbd')}
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
