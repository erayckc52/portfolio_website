import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Styles from './styles/App.module.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AboutMe />
      </main>
    </div>

  )
}

export default App
