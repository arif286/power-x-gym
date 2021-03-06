import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import gift from "../../assets/Image & Icon/gift-2.png";
import body from "../../assets/Image & Icon/Group 87.png";
import cycle from "../../assets/Image & Icon/Group 88.png";

const ChooseUs = () => {
  return (
    <Container className="mt-5">
      <h5>why choose us</h5>
      <Row className="row-cols-1 row-cols-md-3 g-4">
        <Col className="pb-sm-4">
          <Card className="work-card text-center">
            <Card.Body>
              <img className="work-img" src={body} alt="" />
              <h5>free fitness training</h5>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took galley of type and
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-sm-4">
          <Card className="work-card text-center">
            <Card.Body>
              <img className="work-img" src={cycle} alt="" />
              <h5>tons of cardio & strength</h5>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took galley of type and
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-sm-4">
          <Card className="work-card text-center">
            <Card.Body>
              <img className="work-img" src={gift} alt="" />
              <h5>no commitment memberships</h5>
              <p>
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
