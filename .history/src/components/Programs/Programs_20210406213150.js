import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import './Programs.css';
const Programs = () => {
  return (
    <>
      <Container>
        <h1 className="text-center">
          training <span>Programs</span>
        </h1>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col>
            <Card className="yoga programs-img h-100">
              <h1> Yoga training session</h1>
            </Card>
          </Col>
          <Col>
            <Card className="cardio programs-img h-100">
              <h1>cardio training session</h1>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Programs;
