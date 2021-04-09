import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import "./PricingPlan.css";

const check = <FontAwesomeIcon icon={faCheck} />;
const PricingPlan = () => {
  const renderHeader = {
    ShowHeader: 'price',
    text: 'pricing plan'
  }
  return (
    <>
    <Header renderHeader={renderHeader} />
    <Container className="text-center">
      <h4
        style={{
          textTransform: "uppercase",
          fontWeight: 700,
          color: "#fcd842",
          textAlign: "center",
        }}
      >
        choose the offer <span style={{ color: "black" }}>that suits you</span>
      </h4>
      <p
        style={{
          display: "inline-block",
          width: "300px",
          marginTop: "10px",
          marginBottom: "40px",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Row className="row-cols-1 row-cols-sm-3">
        <Col className="pb-4">
          <Card className="advance-plan price-card">
            <Card.Body>
              <p>billed monthly</p>
              <h6>advance</h6>
              <h6 style={{ color: "#fcd842", fontSize: "35px" }}>$140</h6>
              <div>
                <ul className="price-plan">
                  <li>
                    <span>{check}</span>Mobile-Optimized
                  </li>
                  <li>
                    <span>{check}</span>Best Hosting
                  </li>
                  <li>
                    <span>{check}</span>Free Custom
                  </li>
                  <li>
                    <span>{check}</span>Oustanding
                  </li>
                  <li>
                    <span>{check}</span>Happy Customers
                  </li>
                </ul>
              </div>
              <button className="purchase-btn">purchase</button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-4">
          <Card className="basic-plan price-card">
            <Card.Body>
              <p>billed monthly</p>
              <h6>basic</h6>
              <h6 style={{ color: "#fcd842", fontSize: "35px" }}>$120</h6>
              <ul className="price-plan">
                <li>
                  <span>{check}</span>Mobile-Optimized
                </li>
                <li>
                  <span>{check}</span>Best Hosting
                </li>
                <li>
                  <span>{check}</span>Free Custom
                </li>
                <li>
                  <span>{check}</span>Oustanding
                </li>
                <li>
                  <span>{check}</span>Happy Customers
                </li>
              </ul>
              <button className="purchase-btn">purchase</button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-4">
          <Card className="beginner-plan price-card">
            <Card.Body>
              <p>billed monthly</p>
              <h6>beginners</h6>
              <h6 style={{ color: "#fcd842", fontSize: "35px" }}>$90</h6>
              <ul className="price-plan">
                <li>
                  <span>{check}</span>Mobile-Optimized
                </li>
                <li>
                  <span>{check}</span>
                  Best Hosting
                </li>
                <li>
                  <span>{check}</span>Free Custom
                </li>
                <li>
                  <span>{check}</span>Oustanding
                </li>
                <li>
                  <span>{check}</span>Happy Customers
                </li>
              </ul>
              <button className="purchase-btn">purchase</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      </>
  );
};

export default PricingPlan;
