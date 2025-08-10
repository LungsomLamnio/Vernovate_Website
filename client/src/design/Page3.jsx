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
          <p className="section-subtitle">
            Cutting-edge AI solutions at your fingerprints
          </p>
        </div>

        {/* Card */}
        <div className="card-wrapper">
          <div className="background-card"></div>
          <div className="custom-card">
            <div className="card-content d-flex flex-md-row justify-content-between align-items-start">
              {/* Text */}
              <div className="flex-fill">
                <h3 className="card-title">Computer Vision</h3>
                <p className="card-description">
                  Advanced image recognition and analysis capabilities that see beyond human perception.
                </p>
                <ul className="checkmark-list">
                  {[
                    "Real-time object detection",
                    "Facial recognition systems",
                    "Autonomous navigation",
                  ].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Icon */}
              <img
                src="https://img.icons8.com/ios-filled/100/ffb000/camera.png"
                alt="Computer Vision"
                className="card-icon"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS STYLES */}
      <style jsx global>{`
        :root {
          --vernovate-gold: #ffb000;
          --heading-dark: #0c0c00;
          --secondary-bg: #f8f9fa;
          --card-bg: #ffffff;
          --radius: 20px;
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          --shadow-hover: 0 16px 36px rgba(0, 0, 0, 0.15);
        }

        body {
          background: #f3f4f6;
          font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-title {
          position: relative;
          display: inline-block;
          color: var(--heading-dark);
          margin: 0;
          font-size: 2.25rem;
        }

        .underline-animation {
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--vernovate-gold);
          transform: scaleX(0);
          transform-origin: center;
          animation: underlineStretchShrink 1.5s ease-out forwards;
          animation-delay: 0.3s;
        }


         @keyframes underlineStretchShrink {
            0% {
                 transform: scaleX(0);
                }
             60% {
                 transform: scaleX(1); 
                }
              100% {
                 transform: scaleX(0.5); 
                }
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #6c757d;
          margin-top: 1rem;
          font-weight: 400;
        }

        .card-wrapper {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
          min-height: 320px;
        }

        .background-card {
          position: absolute;
          top: 20px;
          left: 20px;
          right: -20px;
          bottom: -20px;
          background-color: var(--secondary-bg);
          border-radius: var(--radius);
          z-index: 1;
          transition: all 0.3s ease;
        }

        .custom-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid #e9ecef;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 2.5rem;
          width: 100%;
          min-height: 320px;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .custom-card:hover {
          transform: translate(-5px, -5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: var(--vernovate-gold);
        }

        .card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-icon {
          width: 80px;
          height: 80px;
          margin-left: 1.5rem;
          margin-top: 6.5rem;
          transition: transform 0.3s ease;
        }

        .custom-card:hover .card-icon {
          transform: scale(1.1);
        }

        .card-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--heading-dark);
          margin-bottom: 1.25rem;
        }

        .card-description {
          color: #6c757d;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          max-width: 90%;
        }

        .checkmark-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .checkmark-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.75rem;
          font-weight: 500;
          color: #2c3e50;
        }

        .checkmark-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--vernovate-gold);
          line-height: 1;
        }

        @media (max-width: 768px) {
          .card-wrapper {
            min-height: auto;
          }

          .background-card {
            display: none;
          }

          .custom-card {
            padding: 1.5rem;
            min-height: auto;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .card-description {
            max-width: 100%;
          }

          .card-content {
            flex-direction: column !important;
          }

          .card-icon {
            align-self: center;
            margin-left: 20.5rem; 
            margin-top: 1rem; 
            margin-bottom: 3.5rem;
            }
        }
      `}</style>
    </section>
  );
};
export default Page3;