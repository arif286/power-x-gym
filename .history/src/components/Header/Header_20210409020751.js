import React from "react";
import { Col, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css';
const Header = (props) => {
  console.log(props)
  return (
    <div className="navBar-bg mb-5">
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          POWER
          <span
            style={{ color: "#FCD842", marginLeft: "6px", fontWeight: 700 }}
          >
            X
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="header-link" to="/home">
              Home
            </NavLink>
            <NavLink className="header-link" to="#features">
              Service
            </NavLink>
            <NavLink className="header-link" to="/classes">
              Our Classes
            </NavLink>
            <NavLink className="header-link" to="/features">
              About Us
            </NavLink>
            <NavLink className="header-link" to="/pricing">
              Pricing
            </NavLink>
            <NavLink className="header-link" to="/pricing">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h1>The Best Fitness Studio in town</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took galley of type and
          </p>
          <button>join us</button>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Header;
