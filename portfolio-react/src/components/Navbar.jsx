// React and styling imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

// Navbar that allows user to navigate to specific pages
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>My Portfolio</h1>
      <ul className={styles.navLinks}>
        <li><NavLink to="/" className={({isActive }) => (isActive ? styles.active : '')}>About Me</NavLink></li>
        <li><NavLink to="/experience" className={({isActive }) => (isActive ? styles.active : '')}>Experience</NavLink></li>
        <li><NavLink to="/projects" className={({isActive }) => (isActive ? styles.active : '')}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({isActive }) => (isActive ? styles.active : '')}>Contacts</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
