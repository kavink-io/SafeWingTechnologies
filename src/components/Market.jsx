// src/components/Market.jsx

import React from 'react';
import AnimatedSection from './AnimatedSection';
import './Market.css';

const Market = () => {
  return (
    <AnimatedSection id="market">
      <div className="container">
        <h2 className="section-title">Who is Guardian Bee for?</h2>
        <div className="market-content">
          <p className="market-intro">
            Guardian Bee is designed for a wide range of individuals and organizations who prioritize proactive safety and peace of mind. It's the perfect safety companion for:
          </p>
          <ul className="market-list">
            <li><strong>University Students</strong> navigating campus life or living in new cities.</li>
            <li><strong>Working Professionals</strong> who commute during early or late hours.</li>
            <li><strong>Solo Travelers and Urban Explorers</strong> venturing into unfamiliar areas.</li>
            <li><strong>Parents and Family Members</strong> looking to provide an extra layer of security for their loved ones.</li>
            <li><strong>Corporations and Institutions</strong> seeking to enhance the safety of their employees and students as part of a wellness program.</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Market;