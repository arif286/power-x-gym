import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Programs.css";
const Programs = () => {
  return (
    <>
      <Container className="mt-5">
        <h4
          style={{
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: "40px"
          }}
          className="text-center mb-3"
        >
          training <span style={{ color: "#fcd842" }}>Programs</span>
        </h4>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col className="pb-4">
            <Card className="yoga programs-img h-100">
              <h6> Yoga training session</h6>
            </Card>
          </Col>
          <Col>
            <Card className="cardio programs-img h-100">
              <h6>cardio training session</h6>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Programs;
