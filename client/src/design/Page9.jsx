import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Page9.css"; 

const Page9 = () => {
  return (
    <div className="section" id="about"> {/* <-- Added id here */}
      <div className="container">
        <div className="heading-wrapper text-center">
          <h2 className="heading">
            About <span className="highlight-ver">Ver</span>novate
          </h2>
          <p className="text-muted">Our journey, our team, our story</p>
        </div>

        <div className="row g-4">
          {/* Our Journey */}
          <div className="col-md-4 d-flex">
            <div className="card p-4 text-center flex-fill">
              <div className="icon-box mb-3">
                <i className="fas fa-flag"></i>
              </div>
              <h5>Our Journey</h5>
              <p className="text-muted">
                Vernovate began with a vision to harness AI and Computer Vision for smarter, safer cities.
                Our story is one of innovation, collaboration and a relentless drive to solve real-world
                problems in urban mobility.
              </p>
            </div>
          </div>

          {/* Meet the Team */}
          <div className="col-md-4 d-flex">
            <div className="card p-4 text-center flex-fill">
              <div className="icon-box mb-3">
                <i className="fas fa-users"></i>
              </div>
              <h5>Meet the Team</h5>
              <p className="text-muted">
                Our diverse team of AI engineers, researchers, and city planners is dedicated to building
                next-gen traffic solutions.
              </p>
              <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                <div className="team-member">
                  <div className="team-photo">
                    <i className="fas fa-user"></i>
                  </div>
                  <small>NAME<br />Founder & AI Lead</small>
                </div>
                <div className="team-member">
                  <div className="team-photo">
                    <i className="fas fa-user"></i>
                  </div>
                  <small>NAME<br />Vision & Leadership</small>
                </div>
                <div className="team-member">
                  <div className="team-photo">
                    <i className="fas fa-user"></i>
                  </div>
                  <small>NAME<br />Urban Mobility Specialist</small>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="col-md-4 d-flex">
            <div className="card p-4 text-center flex-fill">
              <div className="icon-box mb-3">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h5>Our Story</h5>
              <p className="text-muted">
                From research labs to city streets, Vernovate is committed to bridging the gap between
                technology and real-world impact. We believe in a future where AI empowers communities
                and transforms urban life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9;
