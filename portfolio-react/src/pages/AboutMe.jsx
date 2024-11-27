import React from 'react';
import styles from '../styles/AboutMe.module.css';
import animatedIcon from '../assets/images/animated-icon.gif';

const AboutMe = () => {
  return (
    <section id="about" className={styles.aboutMe}>
      <div className={styles.textSection}>
        <h2>About Me</h2>
        <p>
          Hi, I'm Eray Cekic, a passionate software developer specializing in front-end development.
          With a background in React, CSS and JavaScript, I thrive on creating visually engaging and user-friendly web applications.
        </p>
        <p>
          My journey in tech has been driven by curiosity and innovation. Let me take you through my story, experiences and projects.
        </p>
      </div>
      <div className={styles.imageSection}>
        <img src={animatedIcon} alt="Animated Icon" />
      </div>
    </section>
  );
};

export default AboutMe;
