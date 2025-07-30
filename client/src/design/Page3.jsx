import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Page3 = () => {
  return (
    <section id="technology" className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="position-relative d-inline-block">
            <h2 className="section-title fw-bold mb-0">Technology</h2>
            <div className="underline-animation"></div>
          </div>
          <p className="text-muted mt-3">
            Cutting-edge AI solutions at your fingerprints
          </p>
        </div>

        {/* Card */}
        <div className="custom-card mx-auto text-start" style={{ maxWidth: '700px' }}>
          <div className="card border-0 rounded-4 p-4" style={{ minHeight: '325px' }}>
            <div className="d-flex flex-md-row justify-content-between" style={{ alignItems: 'flex-start' }}>
              {/* Text */}
              <div className="flex-fill" style={{ paddingLeft: '0' }}>
                <h3 className="fw-semibold text-dark mb-3">Computer Vision</h3>
                <p className="text-muted mb-3" style={{ maxWidth: "90%" }}>
                  Advanced image recognition and analysis capabilities that see beyond human perception.
                </p>
                <ul className="checkmark-list mt-4">
                  {[
                    "Real-time object detection",
                    "Facial recognition systems",
                    "Autonomous navigation"
                  ].map((item, idx) => (
                    <li key={idx} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Icon */}
              <div className="d-flex justify-content-center align-items-start py-4 px-4" style={{ marginTop: '2rem' }}>
                <img
                  src="https://img.icons8.com/ios-filled/100/ffb000/camera.png"
                  alt="Computer Vision"
                  className="card-icon"
                  style={{ marginTop: '110px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        :root {
          --vernovate-gold: #ffb000;
          --heading-dark: #0c0c00;
          --secondary-bg: #f5f5f5;
          --card-bg: #ffffff;
          --radius: 20px;
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --shadow-hover: 0 16px 36px rgba(0, 0, 0, 0.15);
        }

        body {
          background: #f3f4f6;
          font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }

        .section-title {
          position: relative;
          display: inline-block;
          color: var(--heading-dark);
        }

        .underline-animation {
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 100px;
          height: 4px;
          background: var(--vernovate-gold);
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          animation: underlineGrow 1.5s ease-out forwards;
          animation-delay: 0.3s;
        }

        @keyframes underlineGrow {
          from {
            transform: translateX(-50%) scaleX(0);
          }
          to {
            transform: translateX(-50%) scaleX(1);
          }
        }

        .custom-card {
          background: var(--card-bg);
          border: 0;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 1.5rem 1.5rem 1.5rem 0;
          max-width: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: left;
          margin-left: 0;
          margin-right: 0;
        }

        .custom-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
        }

        .checkmark-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        .checkmark-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: #2c3e50;
        }

        .checkmark-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--vernovate-gold);
          line-height: 1;
        }

        .card-icon {
          width: 60px;
          height: auto;
        }

        @media (max-width: 768px) {
          .d-flex {
            flex-direction: column-reverse !important;
            align-items: flex-start !important;
            gap: 1.5rem;
          }
          .card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Page3;
