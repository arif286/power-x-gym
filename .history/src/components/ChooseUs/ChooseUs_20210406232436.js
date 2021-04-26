import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import gift from "../../power-x-gym/Image & Icon/gift-2.png";
import body from "../../power-x-gym/Image & Icon/Group 87.png";
import cycle from "../../power-x-gym/Image & Icon/Group 88.png";

const ChooseUs = () => {
  return (
    <Container className="mt-5">
      <h5
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: 700,
          marginBottom: "15px",
        }}
      >
        <span style={{ color: "#fcd842" }}>why</span> choose us
      </h5>
      <Row className="row-cols-1 row-cols-md-3 g-4">
        <Col className="pb-sm-4">
          <Card className="work-card text-center shadow">
            <Card.Body>
              <img className="work-img pb-3" src={body} alt="" />
              <h5 style={{ color: "black" }}>free fitness training</h5>
              <p style={{ color: "black" }}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took galley of type and
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-sm-4">
          <Card className="work-card text-center">
            <Card.Body>
              <img className="work-img pb-3" src={cycle} alt="" />
              <h5 style={{ color: "black" }}>tons of cardio & strength</h5>
              <p style={{ color: "black" }}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took galley of type and
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-sm-4">
          <Card className="work-card text-center">
            <Card.Body>
              <img className="work-img pb-3" src={gift} alt="" />
              <h5 style={{ color: "black" }}>no commitment memberships</h5>
              <p style={{ color: "black" }}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took galley of type and
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChooseUs;
