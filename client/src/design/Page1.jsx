import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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

        {/* Feature Cards */}
        <Row className="mt-4 justify-content-center g-4">
          {[
            { icon: "📹", title: "Real-time Video Analytics" },
            { icon: "🚑", title: "Emergency Vehicle Priority" },
            { icon: "🧠", title: "AI-powered Signal Control" },
            { icon: "💻", title: "Desktop Prototype" },
          ].map((item, index) => (
            <Col xs={6} md={3} key={index}>
              <Card
                className="h-100 text-center feature-card border"
                style={{
                  borderRadius: "10px",
                  padding: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  maxWidth: "180px",
                  margin: "0 auto",
                  backgroundColor: "white",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // Base shadow
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.15)"; // Hover shadow
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)"; // Keep base shadow
                }}
              >
                <div style={{ fontSize: "1.8rem" }}>{item.icon}</div>
                <Card.Body className="p-2">
                  <Card.Title
                    className="fw-semibold"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {item.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Page1;
