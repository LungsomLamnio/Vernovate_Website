import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="shadow-sm"
      style={{
        background: "linear-gradient(to right, #fbc02d, #ffe082)",
        paddingTop: "1.4rem",
        paddingBottom: "1.4rem",
        borderBottom: "3px solid #e0c200",
        fontSize: "1.2rem",
      }}
    >
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center w-100 px-4 px-md-5">
          {/* Brand */}
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center"
            style={{
              fontWeight: 900,
              fontSize: "1.8rem",
              letterSpacing: "0.5px",
            }}
          >
            <img
              src="https://i.ibb.co/BrNpMbD/vernocate-logo.png"
              alt="Vernovate Logo"
              style={{ height: "48px", marginRight: "12px" }}
            />
            VERNOVATE
          </Navbar.Brand>

          {/* Toggle & Nav links */}
          <div className="d-flex align-items-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="fw-semibold gap-4 ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#technology">Technology</Nav.Link>
                <Nav.Link href="#prototype">Prototype</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#careers">Careers</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
