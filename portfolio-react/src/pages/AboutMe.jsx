import React from 'react';
import styles from '../styles/AboutMe.module.css';
import animatedIcon from '../assets/images/animated-icon.gif';
import bgVideo from '../assets/videos/bg-wp2.mp4';

// Defining the react component AboutMe
const AboutMe = () => {
  return (
    // Main About Me component using unique ID applying class aboutMe from CSS module
    <section id="about" className={styles.aboutMe}>

      {/*Video Background*/}
      <video autoPlay muted loop className={styles.videoBackground}>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/*Container for image*/}
      <div className={styles.imageSection}>
        {/*Displaying animated icon with alt text*/}
        <img src={animatedIcon} alt="Animated Icon" />
      </div>

      {/*A container for text in a styled box*/}
      <div className={styles.box}>
        {/*Subsection for text with further styling*/}
      <div className={styles.textSection}>
        {/*Heading for About Me with CSS styling*/}
        <h2 className={styles.paragraph}>About Me</h2>
        {/*Paragraph about personal and professional background*/}
        <p className={styles.paragraph}>
          My name is Eray Cekic, I'm a passionate Software Engineer that looks for endless growth throughout my career.
        </p>
        <p className={styles.paragraph}> 
          With utmost determination, I hope to create meaningful solutions to any problem I come across, whether it appear
          in a work environment or even daily life.
        </p>
      </div>
      </div>
    </section>
  );
};

// Exporting AboutMe component for usage outside
export default AboutMe;
