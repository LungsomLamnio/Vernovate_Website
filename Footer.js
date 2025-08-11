import React from "react";
import "../styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Vernovate Logo" className="logo-img" />
              VERNOVATE
            </div>
            <p>Pioneering the future with AI & Computer Vision</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Technology</h4>
            <ul>
              <li><a href="technology.html">AI Solutions</a></li>
              <li><a href="prototype.html">Demos</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Vernovate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
