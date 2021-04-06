import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import gift from '../../power-x-gym/Image & Icon/gift-2.png';
import body from '../../power-x-gym/Image & Icon/Group 87.png';
import cycle from '../../power-x-gym/Image & Icon/Group 88.png';



const ChooseUs = () => {
  return (
      <Container className='mt-5'>
          <h5>why choose us</h5>
      <Row className="row-cols-1 row-cols-md-3 g-4">
        <Col className="pb-sm-4">
          <Card>
            <Card.Body>
              <img src={body} alt="" />
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-sm-4">
          <Card>
            <Card.Body>
              <img src={cycle} alt="" />
            </Card.Body>
          </Card>
        </Col>
        <Col className="pb-sm-4">
          <Card>
            <Card.Body>
              <img src={gift} alt="" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChooseUs;
