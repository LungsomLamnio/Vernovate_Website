import React from "react";
import "./page2.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Page2() {
  return (
    <main className="main-content">
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2>About Us</h2>
            <p className="section-subtitle">Our journey, our team, our story</p>
          </div>
          <div className="content-grid">
            <div className="content-card">
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Vision</h3>
              <p>
                To pioneer the future of urban mobility through cutting-edge AI
                and computer vision technologies, creating smarter, safer, and
                more efficient cities worldwide.
              </p>
            </div>
            <div className="content-card mission-card">
              <div className="card-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Mission</h3>
              <p>
                To develop intelligent traffic solutions that reduce congestion,
                enhance safety, and minimize environmental impact through
                advanced AI and computer vision technologies.
              </p>
            </div>
            <div className="content-card">
              <div className="card-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously push the boundaries of what's possible with AI
                and computer vision, developing groundbreaking solutions for
                modern urban mobility challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page2;
