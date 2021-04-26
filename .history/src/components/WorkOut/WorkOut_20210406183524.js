import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import watch from '../../power-x-gym/Image & Icon/Group 80.png';
import dumble from '../../power-x-gym/Image & Icon/Group 81.png';
import box from '../../power-x-gym/Image & Icon/Group 82.png';
import './WorkOut.css';

const WorkOut = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={3} xs={12}>
            <Card className="progress work-card">
              <img src={watch} alt="" />
            </Card>
          </Col>
          <Col sm={3} xs={12}>
            <Card className="work-out work-card">
              <img src={dumble} alt="" />
            </Card>
          </Col>
          <Col sm={3} xs={12}>
            <Card className="nutrition work-card">
              <img src={box} alt="" />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WorkOut;
