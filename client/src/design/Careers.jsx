// src/pages/Careers.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsCard from "../components/StatsCard";
import JobCard from "../components/JobCard";

export default function Careers() {
  return (
    <>
      <main className="mt-5 pt-4">
        <section className="py-5 bg-light">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="fw-bold text-dark mb-3">Careers</h2>
              <p className="lead text-muted">Join our team of innovators</p>
            </div>

            <div className="row g-4">
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-md-6">
                    <StatsCard number="10+" label="Team Members" />
                  </div>
                  <div className="col-md-6">
                    <StatsCard number="3+" label="Countries" />
                  </div>
                  <div className="col-md-6 mx-auto">
                    <StatsCard number="100%" label="Remote Friendly" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <JobCard
                  title="Senior AI Engineer"
                  location="Remote"
                  type="Full-time"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
