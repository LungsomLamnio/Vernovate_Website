// Page3.jsx
import React from 'react';
import './page3.css';

function Page3() {
  return (
    <section id="technology" className="section tech-section">
        <div className="tech-header">
          <h2 className="section-title">Technology</h2>
          <p>Integrating AI, Computer Vision, and Real-time Data</p>
        </div>

        <div className="card">
          <div className="card-text">
            <h3>Computer Vision</h3>
            <p>Advanced image recognition and analysis capabilities that see beyond human perception.</p>
            <ul>
              <li>Real-time object detection</li>
              <li>Facial recognition systems</li>
              <li>Autonomous navigation</li>
            </ul>
          </div>
          <div className="card-icon">
            <div className="camera-icon-container">
              <img src="https://img.icons8.com/ios-filled/100/ffa500/camera.png" alt="Camera Icon" />
              <div className="white-circle"></div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-text">
            <h3>AI & Machine Learning</h3>
            <p>Smart algorithms that learn and adapt to optimize traffic flow and safety.</p>
            <ul>
              <li>Dynamic signal optimization</li>
              <li>Emergency vehicle priority</li>
              <li>Smart traffic prediction</li>
            </ul>
          </div>
          <div className="card-icon">
            <img src="https://img.icons8.com/fluency/96/FFB000/brain.png" alt="AI Icon" />
          </div>
        </div>

        <div className="card">
          <div className="card-text">
            <h3>Real-time Analytics</h3>
            <p>Instant data processing and visualization for informed decision-making.</p>
            <ul>
              <li>Live traffic monitoring</li>
              <li>Incident detection</li>
              <li>Performance analytics</li>
            </ul>
          </div>
          <div className="card-icon">
            <img src="https://img.icons8.com/fluency/96/FFB000/analytics.png" alt="Analytics Icon" />
          </div>
        </div>
    </section>
  );
}

export default Page3;
