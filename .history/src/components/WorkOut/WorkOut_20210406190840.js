import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import watch from "../../power-x-gym/Image & Icon/Group 80.png";
import dumble from "../../power-x-gym/Image & Icon/Group 81.png";
import box from "../../power-x-gym/Image & Icon/Group 82.png";
import "./WorkOut.css";

const WorkOut = () => {
  return (
    <>
      <Container>
        <Row className="row-cols-1 row-cols-md-3 g-4">
          <Col>
            <Card className="hard-work work-card h-100">
              <Card.Body className="text-center">
                <img src={watch} className="work-img" alt="" />
                <h4>Progression</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took galley of type
                  and
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="work-out work-card h-100">
              <Card.Body className="text-center">
                <img className="work-img" src={dumble} alt="" />
                <h4>Progression</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took galley of type
                  and
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="nutrition work-card h-100">
              <Card.Body className="text-center">
                <img className="work-img" src={box} alt="" />
                <h4>Progression</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took galley of type
                  and
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WorkOut;
