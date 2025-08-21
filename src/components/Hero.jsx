// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Guardian Bee: Your Smart Nano Drone for Safety</h1>
          <p className="hero-subtitle">A smart, flying shield that stays with you, watches your surroundings, and acts instantly to keep you safe.</p>
          <a href="#features" className="btn">Discover Features</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;