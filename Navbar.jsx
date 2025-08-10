// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top bg-white py-3 ${isScrolled ? 'shadow' : ''}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="/logo.png" alt="Vernovate Logo" className="me-2" style={{ height: 36 }} />
          <span className="fw-bold">VERNOVATE</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['Home','About','Technology','Prototype','Blog','Careers','Contact'].map(item => (
              <li className="nav-item" key={item}>
                <a className={`nav-link ${item === 'Careers' ? 'active' : ''}`} href={`/${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
