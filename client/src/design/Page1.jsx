import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Page1 = () => {
  return (
    <div className="py-5 text-center" style={{ backgroundColor: "#f9f9f9" }}>
      <Container>
        {/* Top Badge */}
        <div className="mb-3">
          <span
            className="px-4 py-2 rounded-pill text-white fw-semibold"
            style={{
              backgroundColor: "#1a3a70",
              fontSize: "0.95rem",
              display: "inline-block",
            }}
          >
            Real-time Traffic Monitoring & AI
          </span>
        </div>

        {/* Heading */}
        <h1 className="fw-bold">VERNOVATE</h1>
        <h4 className="fw-semibold mb-3">Smarter Cities. Safer Roads.</h4>

        {/* Description */}
        <p
          className="mx-auto"
          style={{ maxWidth: "800px", fontSize: "1.1rem" }}
        >
          Integrating AI and Computer Vision to revolutionize urban traffic:
          dynamic signal adjustment, emergency vehicle priority, and real-time
          monitoring for a safer, more efficient tomorrow.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 my-4 flex-wrap">
          <Button
            variant="warning"
            className="fw-bold px-4 py-2 rounded-pill d-flex align-items-center"
          >
            Our Mission <span className="ms-2">➡️</span>
          </Button>
          <Button
            variant="light"
            className="fw-bold px-4 py-2 rounded-pill shadow-sm border d-flex align-items-center"
          >
            How it Works <span className="ms-2">🧠</span>
          </Button>
        </div>

        {/* Feature Icons */}
        <Row className="mt-4 justify-content-center text-center g-4">
          <Col xs={6} md={3}>
            <div>
              <div style={{ fontSize: "1.6rem" }}>📹</div>
              <div className="mt-2 fw-semibold">Real-time Video Analytics</div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div>
              <div style={{ fontSize: "1.6rem" }}>🚑</div>
              <div className="mt-2 fw-semibold">Emergency Vehicle Priority</div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div>
              <div style={{ fontSize: "1.6rem" }}>🧠</div>
              <div className="mt-2 fw-semibold">AI-powered Signal Control</div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div>
              <div style={{ fontSize: "1.6rem" }}>💻</div>
              <div className="mt-2 fw-semibold">Desktop Prototype</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page1;
