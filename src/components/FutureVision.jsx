// src/components/FutureVision.jsx

import React from 'react';
import AnimatedSection from './AnimatedSection';
import './FutureVision.css';

const FutureVision = () => {
    return (
        <AnimatedSection id="vision">
            <div className="container">
                <h2 className="section-title">Future Vision</h2>
                <div className="vision-grid">
                    <div className="vision-item"><strong>AI-Powered Threat Recognition:</strong> Autonomously detect aggressive gestures or verbal threats.</div>
                    <div className="vision-item"><strong>"Guardian Hive" Network:</strong> Create a network of drones for coordinated security on campuses or corporate parks.</div>
                    <div className="vision-item"><strong>Extended Battery Life:</strong> Pushing operational time beyond 30 minutes.</div>
                    <div className="vision-item"><strong>Weatherproofing:</strong> Developing ruggedized models for use in all weather conditions.</div>
                    <div className="vision-item"><strong>Seamless Law Enforcement Integration:</strong> Direct API integration with police dispatch for instantaneous response.</div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default FutureVision;