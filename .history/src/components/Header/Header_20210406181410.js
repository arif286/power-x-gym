import React from "react";
import { Nav, Navbar } from "react-bootstrap";


const Header = () => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          POWER
          <span style={{ color: "#FCD842",marginLeft:'6px', fontWeight:700 }}>X</span>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Service</Nav.Link>
          <Nav.Link href="#features">Our Classes</Nav.Link>
          <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#features">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;
