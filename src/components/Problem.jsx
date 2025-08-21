// src/components/Problem.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import './Problem.css';

const Problem = () => {
  return (
    <AnimatedSection id="problem">
      <div className="container">
        <h2 className="section-title">The Harsh Reality Women Face</h2>
        <div className="problem-grid">
          <div className="card">
            <h3>Constant Vigilance</h3>
            <p>The mental burden of always being on alert in public spaces.</p>
          </div>
          <div className="card">
            <h3>Restricted Freedom</h3>
            <p>Avoiding routes, times, or opportunities due to safety concerns.</p>
          </div>
          <div className="card">
            <h3>Delayed Help</h3>
            <p>Emergency response can take minutes, where situations escalate drastically.</p>
          </div>
          <div className="card">
            <h3>Lack of Evidence</h3>
            <p>No unbiased witness or proof makes justice difficult to achieve.</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Problem;