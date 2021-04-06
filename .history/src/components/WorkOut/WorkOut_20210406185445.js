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
        <Row className='row-cols-1 row-cols-md-3 g-4'>
          <Col>
            <Card className="hard-work work-card h-100">
              <img src={watch} alt="" />
            </Card>
          </Col>
          <Col>
            <Card className="work-out work-card h-100">
              <img src={dumble} alt="" />
            </Card>
          </Col>
          <Col>
            <Card className="nutrition work-card h-100">
              <img src={box} alt="" />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WorkOut;
