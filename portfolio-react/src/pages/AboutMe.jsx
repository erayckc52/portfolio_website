import React from 'react';
import styles from '../styles/AboutMe.module.css';
import animatedIcon from '../assets/images/animated-icon.gif';

// Defining the react component AboutMe
const AboutMe = () => {
  return (
    // Main About Me component using unique ID applying class aboutMe from CSS module
    <section id="about" className={styles.aboutMe}>
      {/*A container for text in a styled box*/}
      <div className={styles.box}>
        {/*Subsection for text with further styling*/}
      <div className={styles.textSection}>
        {/*Heading for About Me with CSS styling*/}
        <h2 className={styles.paragraph}>About Me</h2>
        {/*Paragraph about personal and professional background*/}
        <p className={styles.paragraph}>
          Hi, I'm Eray Cekic, a passionate and curious software engineer with a strong drive 
          to build meaningful solutions and solve complex problems. 
          My journey into technology began with a fascination for how systems work 
          and a natural affinity for creating efficient functional applications. 
          Over the years I've honed my skills across front-end and back-end development, 
          delving into frameworks like React and Node.js, exploring the power of Docker 
          and cloud platforms and embracing agile methodologies to bring ideas to life. 
        </p>
        <p className={styles.paragraph}>
          What truly excites me is the intersection of creativity and logic in software development. 
          I've worked on projects that range from front-end development to database management, 
          each one reinforcing my passion for learning and pushing boundaries. 
          While I am still early in my professional journey, 
          I've built a strong foundation in software engineering through 
          university projects, personal endeavours and a few internships where I contributed to real world applications. 
          My hands on experience in collaborative environments has shaped me into a team player who thrives on 
          feedback, innovation and shared goals.
        </p>
        <p className={styles.paragraph}>
          When I'm not immersed in coding you can probably find me playing video games 
          or training with a good boxing session, which are in my eyes, activities that fuel my competitive spirit and keep me grounded. 
          I value humor, adaptability and a relentless pursuit of growth both personally and professionally.
        </p>
        <p className={styles.paragraph}>
          This website is my digital corner where I share my work and aspirations. 
          Whether you're a fellow developer, a potential collaborator or someone curious about my journey, 
          I'm excited to connect and explore new opportunities.
        </p>
      </div>
      </div>

      {/*Container for image*/}
      <div className={styles.imageSection}>
        {/*Displaying animated icon with alt text*/}
        <img src={animatedIcon} alt="Animated Icon" />
      </div>
    </section>
  );
};

// Exporting AboutMe component for usage outside
export default AboutMe;
