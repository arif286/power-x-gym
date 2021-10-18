import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import watch from '../../assets/Image & Icon/Group 80.png';
import dumble from '../../assets/Image & Icon/Group 81.png';
import box from '../../assets/Image & Icon/Group 82.png';

const WorkOut = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={3} xs={12}>
            <Card>
              <img src={watch} alt="" />
            </Card>
          </Col>
          <Col sm={3} xs={12}>
            <Card>
              <img src={dumble} alt="" />
            </Card>
          </Col>
          <Col sm={3} xs={12}>
            <Card>
              <img src={box} alt="" />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WorkOut;
