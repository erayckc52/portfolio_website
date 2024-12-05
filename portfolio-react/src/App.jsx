import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Styles from './styles/App.module.css';

// Defining the main App component
const App = () => {
  return (
    <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </Router>
  )
}

// Exporting App component for rendering in the main application
export default App
