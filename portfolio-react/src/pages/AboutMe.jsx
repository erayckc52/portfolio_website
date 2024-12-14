import React from 'react';
import styles from '../styles/AboutMe.module.css';
import portrait from '../assets/images/portrait.jpeg';
import bgVideo from '../assets/videos/bg-wp2.mp4';
import 'animate.css';


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
        {/* Displaying portrait with animation */}
        <img
          src={portrait}
          alt="Portrait"
          className="animate__animated animate__fadeIn"
        />
      </div>

      {/*A container for text in a styled box*/}
      <div className={`${styles.box} animate__animated animate__fadeIn`}>
        {/*Subsection for text with further styling*/}
      <div className={styles.textSection}>
        {/*Heading for About Me with CSS styling*/}
        <h2 className={styles.paragraph}>About Me</h2>
        {/*Paragraph about personal and professional background*/}
        <p className={styles.paragraph}>
          My name is Eray Cekic, and I am a driven Software Engineer passionate about creating innovative solutions and embracing new challenges.
        </p>
        <p className={styles.paragraph}> 
          With an unwavering commitment to excellence, I bring a problem-solving mindset and technical expertise to every project I undertake.
        </p>
        <p className={styles.paragraph}> 
        I am equally comfortable working collaboratively in dynamic teams or autonomously on complex tasks, 
        thriving in environments that allow me to contribute meaningfully while continuously advancing my skills and career.
        </p>
      </div>
      </div>
    </section>
  );
};

// Exporting AboutMe component for usage outside
export default AboutMe;
