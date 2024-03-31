import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      <Navbar currentSection={currentSection} handleNavClick={handleNavClick} />
      {currentSection === 'home' && <Home />}
      {currentSection === 'resume' && <Resume />}
      {currentSection === 'portfolio' && <Portfolio />}
    </div>
  );
};

export default App;
