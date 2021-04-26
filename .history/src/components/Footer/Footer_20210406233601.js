import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <h5>
              POWER <span>X</span>
            </h5>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <ul>
              <li>
                <NavLink to="/">Need Help?</NavLink>
              </li>
              <li>
                <NavLink to="/">Help Center</NavLink>
              </li>
              <li>
                <NavLink to="/"> Email Support</NavLink>
              </li>
              <li>
                <NavLink to="/">Live Chart</NavLink>
              </li>
              <li>
                <NavLink to='/'>Feedback</NavLink>
              </li>
            </ul>
          </Col>
                  <Col xs={12} sm={6} md={3}>
                      <ul>
                          <li><NavLink to='/'>Digital Resources</NavLink></li>
                          <li><NavLink to='/'>Articles</NavLink></li>
                          <li><NavLink to='/'>E-books</NavLink></li>
                      </ul>
          </Col>
          <Col xs={12} sm={6} md={3}></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
