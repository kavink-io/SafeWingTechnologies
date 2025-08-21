// src/components/Features.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import './Features.css';

const featuresData = [
    { title: "Instant, Hands-Free Activation", description: "Activate with a simple voice command 'Hello Guardian' or a discreet one-touch button for silent activation." },
    { title: "Proactive Alert System", description: "Automatically sends live GPS, photos, and video to emergency contacts and police authorities." },
    { title: "Visual & Audible Alarms", description: "Emits a high-decibel siren and flashes powerful warning lights to attract attention and deter threats." },
    { title: "Reliable Evidence Capture", description: "Records up to 15 minutes of high-definition video and audio, with a silent mode option." }
];

const Features = () => {
  return (
    <AnimatedSection id="features">
      <div className="container">
        <h2 className="section-title">A Comprehensive Safety Companion</h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div className="card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Features;