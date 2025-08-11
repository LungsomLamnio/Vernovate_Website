// src/components/JobCard.jsx
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function JobCard({ title, location, type }) {
  const [applied, setApplied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleApply = () => {
    if (!window.confirm(`Apply for ${title}? This will simulate opening an application form.`)) {
      return;
    }
    setApplied(true);
    timerRef.current = setTimeout(() => {
      setApplied(false);
    }, 3000);
  };

  return (
    <div className="card border-0 shadow-sm mb-4 hover-shadow transition-all">
      <div className="card-body p-4">
        <h3 className="h4 fw-bold">{title}</h3>
        <p className="text-muted mb-3">
          <i className="bi bi-geo-alt me-2" /> {location} • <i className="bi bi-briefcase me-2" /> {type}
        </p>

        <button
          onClick={handleApply}
          className={`btn ${applied ? 'btn-success' : 'btn-warning'} btn-apply`}
          disabled={applied}
        >
          {applied ? (<><i className="bi bi-check-circle me-2" /> Application Started!</>) : 'Apply Now'}
        </button>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
