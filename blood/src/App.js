import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './container/Navbar';
import Home from './components/Home';
import DonateBlood from './components/DonateBlood';
import FindDonors from './components/FindDonors';
import BloodBanks from './components/BloodBanks';
import LoginRegister from './components/LoginRegister';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <Router>
      <div className="app">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blood-banks" element={<BloodBanks />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
