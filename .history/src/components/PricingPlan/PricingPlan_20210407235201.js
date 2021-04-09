import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import './PricingPlan.css';

const PricingPlan = () => {
  return (
    <Container>
      <h4>choose the offer that suits you</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Row className="row-cols-1 row-cols-sm-3">
        <Col>
          <Card className="advance-plan price-card">
            <Card.Body>
              <p>billed monthly</p>
              <h6>advance</h6>
              <h6 style={{ color: "#fcd842", fontSize: "35px" }}>$140</h6>
              <ul className="price-plan">
                <li>Mobile-Optimized</li>
                <li>Best Hosting</li>
                <li>Free Custom</li>
                <li>Oustanding</li>
                <li>Happy Customers</li>
              </ul>
              <button className="purchase-btn">purchase</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="basic-plan price-card">
            <Card.Body>
              <p>billed monthly</p>
              <h6>basic</h6>
              <h6 style={{ color: "#fcd842", fontSize: "35px" }}>$120</h6>
              <ul className="price-plan">
                <li>Mobile-Optimized</li>
                <li>Best Hosting</li>
                <li>Free Custom</li>
                <li>Oustanding</li>
                <li>Happy Customers</li>
              </ul>
              <button className="purchase-btn">purchase</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="beginner-plan price-card">
            <Card.Body>
              <p>billed monthly</p>
              <h6>beginners</h6>
              <h6 style={{ color: "#fcd842", fontSize: "35px" }}>$90</h6>
              <ul className="price-plan">
                <li>Mobile-Optimized</li>
                <li>Best Hosting</li>
                <li>Free Custom</li>
                <li>Oustanding</li>
                <li>Happy Customers</li>
              </ul>
              <button className="purchase-btn">purchase</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingPlan;
