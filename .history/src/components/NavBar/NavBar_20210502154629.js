import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

const NavBar = () => {
    return (
      <>
        <Navbar expand="lg">
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
      </>
    );
};

export default NavBar;