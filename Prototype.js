import React, { useEffect } from "react";
import "../styles.css";

export default function Prototype() {
  useEffect(() => {
    const cards = document.querySelectorAll(".prototype-card");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.style.animation = "fadeInUp 0.6s ease forwards";
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });
  }, []);

  const handleDemoClick = (e) => {
    const button = e.currentTarget;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Loading Demo...</span>';
    setTimeout(() => {
      alert("Demo would launch here! Placeholder for actual demo.");
      button.innerHTML = '<span>Try Demo</span> <i class="fas fa-external-link-alt"></i>';
    }, 2000);
  };

  return (
    <section id="prototype" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Prototype</h2>
          <p className="section-subtitle">Experience our latest innovations</p>
        </div>
        <div className="prototype-showcase">
          <div className="prototype-card" data-aos="zoom-in">
            <div className="prototype-header">
              <h3>AI Vision Demo</h3>
              <span className="status-badge">Live</span>
            </div>
            <div className="prototype-preview">
              <i className="fas fa-play-circle"></i>
              <p>Interactive demonstration of our computer vision capabilities</p>
            </div>
            <button className="demo-button" onClick={handleDemoClick}>
              <span>Try Demo</span>
              <i className="fas fa-external-link-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
