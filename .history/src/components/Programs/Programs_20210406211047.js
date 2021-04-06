import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Programs = () => {
  return (
    <>
      <Container>
        <h1>
          training <span>Programs</span>
        </h1>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col>
            <Card>
              <h1> Yoga training session</h1>
            </Card>
          </Col>
          <Col>
            <Card>
              <h1>cardio training session</h1>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Programs;
