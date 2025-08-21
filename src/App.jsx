// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs'; // Import the new component
import Problem from './components/Problem';
import Features from './components/Features';
import Competition from './components/Competition';
import Market from './components/Market';
import WhyNow from './components/WhyNow';
import FutureVision from './components/FutureVision';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs /> {/* Add the new component here */}
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