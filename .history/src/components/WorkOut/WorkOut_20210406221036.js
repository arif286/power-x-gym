import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import watch from "../../assets/Image & Icon/Group 80.png";
import dumble from "../../assets/Image & Icon/Group 81.png";
import box from "../../assets/Image & Icon/Group 82.png";
import "./WorkOut.css";

const WorkOut = () => {
  return (
    <>
      <Container>
        <Row className="row-cols-1 row-cols-md-3 g-4">
          <Col className="pb-sm-4">
            <Card className="hard-work work-card h-100">
              <Card.Body className="work-body">
                <img src={watch} className="work-img" alt="" />
                <h5>Progression</h5>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took galley of type
                  and
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pb-sm-4">
            <Card className="work-out work-card h-100">
              <Card.Body className="work-body">
                <img className="work-img" src={dumble} alt="" />
                <h5 style={{ color: "#FCD842" }}>WorkOut</h5>
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
              <Card.Body className="work-body">
                <img className="work-img" src={box} alt="" />
                <h5>nutrition</h5>
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
