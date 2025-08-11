// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Bootstrap CSS + icons + JS (for navbar collapse)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Global CSS
import './styles/careers.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
