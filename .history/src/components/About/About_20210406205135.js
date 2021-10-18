import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../assets/Image & Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg";

const About = () => {
  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center mb-4 about-title">about us</h1>
        <Row className="row-cols-1 row-cols-md-2 g-4 ">
          <Col>
            <Card className="h-75">
              <img className='img-fluid' src={aboutImg} alt="" />
            </Card>
          </Col>
          <Col>
            <Card style={{ border: "none" }} className="h-100 work-card ">
              <Card.Body>
                <h5 style={{ color: "#FCD842", fontSize: "25px", marginTop:'20px' }}>
                  We are here to dream
                </h5>
                <h5 style={{ color: "black", fontSize: "25px" }}>
                  our team is here serve you
                </h5>
                <p style={{ color: "black" }}>
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
