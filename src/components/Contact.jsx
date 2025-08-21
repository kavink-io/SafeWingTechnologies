// src/components/Contact.jsx

import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import './Contact.css';

const Contact = () => {
  return (
    <AnimatedSection id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info-standalone">
            <h3>Contact Information</h3>
            <p>Feel free to reach out for collaborations or any questions about the Guardian Bee project.</p>
            <a href="mailto:safewingtechnologies@gmail.com" className="info-item">
              <FaEnvelope /> safewingtechnologies@gmail.com
            </a>
            <a href="tel:+91 93602 94148" className="info-item">
              <FaPhone /> +91 93602 94148
            </a>
            <div className="social-media-standalone">
              <a href="https://www.linkedin.com/in/kavink01/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
              <a href="https://github.com/kavink-io" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;