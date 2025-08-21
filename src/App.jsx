// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Problem from './components/Problem';
import Features from './components/Features';
import Competition from './components/Competition';
import Market from './components/Market';
import WhyNow from './components/WhyNow';
import FutureVision from './components/FutureVision';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  // Get theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    // Apply theme to the body and save to localStorage
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutUs />
        <Problem />
        <Features />
        <Competition />
        <Market />
        <WhyNow />
        <FutureVision />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;