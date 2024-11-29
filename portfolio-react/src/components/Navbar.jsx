import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>My Portfolio</h1>
      <ul className={styles.navLinks}>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contatcs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
