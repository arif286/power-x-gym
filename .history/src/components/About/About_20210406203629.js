import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import aboutImg from '../../power-x-gym/Image & Icon/wells-chan-H-vAxuWxmi8-unsplash.png';

const About = () => {
  return (
    <>
      <Container>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col>
            <Card>
              <img src={aboutImg} alt="" />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h5>We are here to dream</h5>
                <h5>our team is here serve you</h5>
                <p>
                  Lorem ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. it has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. it was
                  popularised in the 1960s with the release of
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
