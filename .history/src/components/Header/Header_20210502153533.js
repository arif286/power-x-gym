import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css';
const Header = ({ renderHeader }) => {

const headerContent = (
      <Row className="row-cols-1 row-cols-md-2 mt-5">
        <Col className="header-content pb-4 order-last order-md-first">
          <h2>The Best Fitness Studio in town</h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took galley of type and
          </p>
          <button>join us</button>
        </Col>
        <Col className="pb-4  order-first order-md-last">
          <iframe
            width="100%"
            height="260"
            src="https://www.youtube-nocookie.com/embed/gey73xiS8F4?start=15"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    )

  let header;
  if (renderHeader.showHeader === "home") {
    header = headerContent;
  } else if (renderHeader.showHeader === "class") {
    header = (
      <div className="header-container">
        <h1 className="header-title">{renderHeader.text}</h1>
      </div>
    );
  } else if (renderHeader.showHeader === "details") {
    header = (
      <div className="header-container">
        <h1 className="header-title">{renderHeader.text}</h1>
      </div>
    );
  }
  else if (renderHeader.showHeader === "price") {
    header = (
      <div className="header-container">
        <h1 className="header-title">{renderHeader.text}</h1>;
      </div>
    );
  } else if (renderHeader.showHeader === "memberShip") {
    header = (
      <div className="header-container">
        <h1 className="header-title">{renderHeader.text}</h1>
      </div>
    );
  } else {
    header = headerContent;
  }

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
            <NavLink className="header-link" to="/classes">
              Our Classes
            </NavLink>
            <NavLink className="header-link" to="/pricing">
              Pricing
            </NavLink>
            <NavLink className="header-link" to="/contact">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>{header}</Container>
    </div>
  );
};

export default Header;
