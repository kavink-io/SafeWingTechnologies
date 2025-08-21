// src/components/WhyNow.jsx

import React from 'react';
import AnimatedSection from './AnimatedSection';

const WhyNow = () => {
    return (
        <AnimatedSection id="whynow">
            <div className="container">
                <h2 className="section-title">Why Now?</h2>
                <div className="problem-grid">
                    <div className="card">
                        <h3>Technological Maturity</h3>
                        <p>Advances in nano-drones, batteries, and cameras make Guardian Bee possible and affordable.</p>
                    </div>
                    <div className="card">
                        <h3>Hyper-Connectivity</h3>
                        <p>Ubiquitous 4G/5G ensures reliable, high-speed transmission of live video and location data.</p>
                    </div>
                    <div className="card">
                        <h3>Increased Safety Awareness</h3>
                        <p>A growing global conversation fuels the search for innovative and effective safety solutions.</p>
                    </div>
                    <div className="card">
                        <h3>Market Gap</h3>
                        <p>Current products are passive. The market is ready for a proactive, intelligent device.</p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default WhyNow;