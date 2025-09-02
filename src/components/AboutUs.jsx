// src/components/AboutUs.jsx

import React from 'react';
import AnimatedSection from './AnimatedSection';
import './AboutUs.css';

const teamMembers = [
  {
    name: 'Janani S',
    role: 'Founder & CEO',
    description: 'The visionary behind Guardian Bee, Janani leads the project with a passion for leveraging technology to create a safer world for women. She manages the overall product strategy and development.'
  },
  {
    name: 'Kavin K',
    role: 'Co-Founder & Lead Engineer',
    description: 'Kavin is the technical architect of Guardian Bee. He oversees all aspects of the drone\'s hardware and software engineering, ensuring a seamless and reliable user experience.'
  },
];

const AboutUs = () => {
  return (
    <AnimatedSection id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card card" key={index}>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutUs;