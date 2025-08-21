// src/components/Competition.jsx

import React from 'react';
import AnimatedSection from './AnimatedSection';
import './Competition.css';

const Competition = () => {
  return (
    <AnimatedSection id="competition">
      <div className="container">
        <h2 className="section-title">Competitive Advantages</h2>
        <p className="section-subtitle">
          Guardian Bee stands out by being a proactive, autonomous guardian, unlike reactive, manual alternatives.
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Guardian Bee</th>
                <th>Safety Apps</th>
                <th>Pepper Spray</th>
                <th>Sound Alarm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Activation</td>
                <td data-label="Guardian Bee">Hands-Free (Voice/Button)</td>
                <td data-label="Safety Apps">Manual (Phone needed)</td>
                <td data-label="Pepper Spray">Manual (In-hand)</td>
                <td data-label="Sound Alarm">Manual (Button/Pin)</td>
              </tr>
              <tr>
                <td>Deterrent</td>
                <td data-label="Guardian Bee">Visual & Audible</td>
                <td data-label="Safety Apps">None</td>
                <td data-label="Pepper Spray">Chemical (Close Range)</td>
                <td data-label="Sound Alarm">Audible Only</td>
              </tr>
              <tr>
                <td>Evidence Recording</td>
                <td data-label="Guardian Bee">Yes, Autonomous Video</td>
                <td data-label="Safety Apps">Limited / Manual</td>
                <td data-label="Pepper Spray">No</td>
                <td data-label="Sound Alarm">No</td>
              </tr>
              <tr>
                <td>Live Location</td>
                <td data-label="Guardian Bee">Yes, Automated</td>
                <td data-label="Safety Apps">Yes, Manual</td>
                <td data-label="Pepper Spray">No</td>
                <td data-label="Sound Alarm">No</td>
              </tr>
              <tr>
                <td>Autonomy</td>
                <td data-label="Guardian Bee">High (Takeoff, Record, Alert)</td>
                <td data-label="Safety Apps">Low</td>
                <td data-label="Pepper Spray">None</td>
                <td data-label="Sound Alarm">None</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AnimatedSection>
  );
};

// This is the line that was missing!
export default Competition;