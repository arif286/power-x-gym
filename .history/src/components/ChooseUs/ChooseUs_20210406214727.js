import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ChooseUs = () => {
  return (
    <Container>
      <Row className="row-cols-1 row-cols-md-3 g-4">
        <Col className="pb-sm-4">
          <Card>
            <Card.Body>
              <img src alt="" />
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-sm-4">
          <Card>
            <Card.Body>
              <img src alt="" />
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-sm-4">
          <Card>
            <Card.Body>
              <img src alt="" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChooseUs;
