// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Logo & Socials */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <img src="/logo.png" alt="Vernovate Logo" className="me-2" style={{ height: 36 }} />
              <span className="fw-bold fs-4 text-white">VERNOVATE</span>
            </div>
            <p className="text-white-50">Pioneering the future with AI & Computer Vision</p>
            <div className="d-flex">
              {['twitter','linkedin','github'].map(icon => (
                <a key={icon} href="#" className="btn btn-outline-light btn-sm rounded-circle me-2">
                  <i className={`bi bi-${icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-2 col-6 mb-3">
            <h5 className="text-warning mb-3">Company</h5>
            {['About','Careers','Blog'].map(link => (
              <p key={link}>
                <a href={`/${link.toLowerCase()}`} className="text-white text-decoration-none">{link}</a>
              </p>
            ))}
          </div>

          <div className="col-md-2 col-6 mb-3">
            <h5 className="text-warning mb-3">Technology</h5>
            {['AI Solutions','Demos','API'].map(link => (
              <p key={link}><a href="#" className="text-white text-decoration-none">{link}</a></p>
            ))}
          </div>

          <div className="col-md-2 col-6">
            <h5 className="text-warning mb-3">Support</h5>
            {['Contact','Documentation','Help Center'].map(link => (
              <p key={link}><a href="#" className="text-white text-decoration-none">{link}</a></p>
            ))}
          </div>
        </div>

        <hr className="my-4 border-light opacity-25" />
        <div className="text-center">
          <p className="mb-0 text-white-50">&copy; 2024 Vernovate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
