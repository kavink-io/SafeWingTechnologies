// src/components/Header.jsx
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="container">
        <a href="#home" className="logo">Guardian Bee</a>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
          <li><a href="#problem" onClick={() => setIsOpen(false)}>The Problem</a></li>
          <li><a href="#features" onClick={() => setIsOpen(false)}>Features</a></li>
          <li><a href="#market" onClick={() => setIsOpen(false)}>Market</a></li>
          <li><a href="#vision" onClick={() => setIsOpen(false)}>Vision</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
        <div className="header-controls">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;