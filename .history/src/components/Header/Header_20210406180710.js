import React from "react";
import { Nav, Navbar } from "react-bootstrap";


const Header = () => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          POWER
          <span style={{ color: "#FCD842" }}>X</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;
