// client/src/design/Page3.jsx

import React from "react";
import "./page3.css";

const Page3 = () => {
  return (
    <section id="technology" className="section tech-section">
      <div className="container">
        <div className="tech-header">
          <h2 className="section-title">Technology</h2>
          <div className="underline-animation"></div>
          <p>Integrating AI, Computer Vision, and Real-time Data</p>
        </div>

        {/* Only Computer Vision Card */}
        <div className="card">
          <div className="card-text">
            <h3>Computer Vision</h3>
            <p>
              Advanced image recognition and analysis capabilities that see
              beyond human perception.
            </p>
            <ul>
              <li>Real-time object detection</li>
              <li>Facial recognition systems</li>
              <li>Autonomous navigation</li>
            </ul>
          </div>
          <div className="card-icon">
            <div className="camera-icon-container">
              <img
                src="https://img.icons8.com/ios-filled/100/ffa500/camera.png"
                alt="Camera Icon"
              />
              <div className="white-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page3;
