// src/components/StatsCard.jsx
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function StatsCard({ number, label, duration = 1000 }) {
  const nodeRef = useRef(null);
  const [current, setCurrent] = useState(null);
  const [started, setStarted] = useState(false);

  // observe when component comes into view
  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  // animate when started
  useEffect(() => {
    if (!started) return;
    const digits = parseInt(number.replace(/\D/g, ''), 10) || 0;
    const suffix = number.includes('+') ? '+' : number.includes('%') ? '%' : '';

    let startTime = null;
    const step = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(digits * progress);
      setCurrent(value + suffix);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrent(digits + suffix);
      }
    };

    requestAnimationFrame(step);
  }, [started, number, duration]);

  const initialDisplay = number.includes('+') ? '0+' : number.includes('%') ? '0%' : '0';

  return (
    <div ref={nodeRef} className="card h-100 border-0 shadow-sm hover-shadow transition-all">
      <div className="card-body text-center p-4">
        <h3 className="display-5 fw-bold text-warning mb-3">{current !== null ? current : initialDisplay}</h3>
        <p className="text-muted mb-0">{label}</p>
      </div>
    </div>
  );
}

StatsCard.propTypes = {
  number: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  duration: PropTypes.number,
};
