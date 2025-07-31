import React, { useEffect } from 'react';

const AboutVernovate = () => {
  useEffect(() => {
    const underline = document.querySelector('.underline');
    setTimeout(() => {
      if (underline) underline.classList.add('animate');
    }, 300);
  }, []);

  return (
    <>

      {/* Styles */}
      <style>{`
        .icon-box {
          font-size: 2rem;
          color: #ffc107;
        }
        .card {
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          border: none;
          transition: all 0.3s ease;
          background-color: #fff;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
          .underline-container {
          position: relative;
          display: inline-block;
        }

        .underline {
          position: relative;
          display: inline-block;
        }

        .underline:after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;               /* Start from 0 width */
          height: 3px;
          background-color: #ffc107;
          transition: width 0.8s ease-out;  /* Animate width */
        }

        .underline.animate:after {
          width: 60px;            /* Animate to 60px width */
        }

        .team-member {
          text-align: center;
          margin: 0 5px;
          transition: all 0.3s ease;
          cursor: pointer;
          padding: 10px;
          border-radius: 10px;
        }
        .team-member:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .team-photo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid #ffc107;
          margin: 0 auto 8px auto;
          background-color: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .team-member:hover .team-photo {
          transform: scale(1.1);
          border-color: #ffd700;
          box-shadow: 0 0 15px rgba(255, 193, 7, 0.5);
        }
        .team-photo i {
          font-size: 2rem;
          color: #6c757d;
        }
        .team-member:hover .team-photo i {
          color: #ffc107;
        }
        .team-member small {
          transition: all 0.3s ease;
        }
        .team-member:hover small {
          color: #333 !important;
          font-weight: 500;
        }
      `}</style>

      {/* Section Layout */}
      <div className="py-5 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            <span className="underline-container">
              <span className="underline">About Vernovate</span>
            </span>
          </h2>
          <p className="text-muted">Our journey, our team, our story</p>
        </div>

        {/* Cards Layout */}
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {/* Card 1 - Our Journey */}
          <div className="card p-4 text-center" style={{ flex: "1 1 300px", maxWidth: "400px" }}>
            <div className="icon-box mb-3">
              <i className="fas fa-flag"></i>
            </div>
            <h5 className="fw-bold">Our Journey</h5>
            <p className="text-muted">
              Vernovate began with a vision to harness AI and Computer Vision for smarter, safer cities.
              Our story is one of innovation, collaboration and a relentless drive to solve real-world problems
              in urban mobility.
            </p>
          </div>

          {/* Card 2 - Meet the Team */}
          <div className="card p-4 text-center" style={{ flex: "1 1 300px", maxWidth: "400px" }}>
            <div className="icon-box mb-3">
              <i className="fas fa-users"></i>
            </div>
            <h5 className="fw-bold">Meet the Team</h5>
            <p className="text-muted">
              Our diverse team of AI engineers, researchers, and city planners is dedicated to building next-gen traffic solutions.
            </p>
            <div className="d-flex justify-content-around mt-3 flex-wrap">
              {["Founder & AI Lead", "Vision & Leadership", "Urban Mobility Specialist"].map((role, idx) => (
                <div className="team-member" key={idx}>
                  <div className="team-photo">
                    <i className="fas fa-user"></i>
                  </div>
                  <small className="text-muted d-block">NAME<br />{role}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 - Our Story */}
          <div className="card p-4 text-center" style={{ flex: "1 1 300px", maxWidth: "400px" }}>
            <div className="icon-box mb-3">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h5 className="fw-bold">Our Story</h5>
            <p className="text-muted">
              From research labs to city streets, Vernovate is committed to bridging the gap between
              technology and real-world impact. We believe in a future where AI empowers communities
              and transforms urban life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVernovate;