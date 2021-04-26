import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Facebook from '../../power-x-gym/Image & Icon/bxl-facebook.png';
import Instagram from '../../power-x-gym/Image & Icon/bxl-instagram.png';
import Twitter from '../../power-x-gym/Image & Icon/bxl-twitter.png';
import YouTube from '../../power-x-gym/Image & Icon/bxl-youtube.png';

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
            <h5>Need Help</h5>
            <ul>
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
                <NavLink to="/">Feedback</NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Digital Resources</h5>
            <ul>
              <li>
                <NavLink to="/">Gift Certificates</NavLink>
              </li>
              <li>
                <NavLink to="/">Articles</NavLink>
              </li>
              <li>
                <NavLink to="/">E-books</NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Connect with Us</h5>
            <div className="social-link">
              <p>
                <a href="/">
                  <img className="social-img" src={Facebook} alt="" />
                </a>
              </p>
              <p className="social-link">
                <a href="/">
                  <img className="social-img" src={Instagram} alt="" />
                </a>
              </p>
              <p>
                <a href="/">
                  <img className="social-img" src={Twitter} alt="" />
                </a>
              </p>
              <p>
                <a href="/">
                  <img className="social-img" src={YouTube} alt="" />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
