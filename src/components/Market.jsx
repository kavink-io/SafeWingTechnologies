// src/components/Market.jsx

import React from 'react';
import AnimatedSection from './AnimatedSection';
import './Market.css';

const Market = () => {
  return (
    <AnimatedSection id="market">
      <div className="container">
        <h2 className="section-title">Target Market and Audience</h2>
        <div className="market-grid">
          <div className="card">
            <h3>Primary Audience</h3>
            <ul>
              <li>🎓 University Students</li>
              <li>👩‍💼 Working Professionals</li>
              <li>🗺️ Solo Travelers & Urban Explorers</li>
            </ul>
          </div>
          <div className="card">
            <h3>Secondary Market</h3>
            <ul>
              <li>👨‍👩‍👧 Parents</li>
              <li>🏢 Corporations & Institutions</li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Market;