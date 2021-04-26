import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./ClassDetails.css";

const checkSquare = <FontAwesomeIcon icon={faCheckSquare} />;
const ClassDetails = () => {
  const { id } = useParams();
  const [classDetails, setClassDetails] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/eventDetails/${id}`)
      .then((res) => setClassDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  const {
    image,
    item1,
    item2,
    item3,
    item4,
    item5,
    description,
  } = classDetails;
  return (
    <Container>
      <Row className="row-cols-1 row-cols-md-2 g-4">
        <Col>
          <img
            className="w-100 mb-4"
            style={{
              maxHeight: "500px",
            }}
            src={image}
            alt=""
          />
          <p>{description}</p>
          <div className="details">
            <h6>
              <span>{checkSquare}</span>
              {item1}
            </h6>
            <h6>
              <span>{checkSquare}</span>
              {item2}
            </h6>
            <h6>
              <span>{checkSquare}</span>
              {item3}
            </h6>
            <h6>
              <span>{checkSquare}</span>
              {item4}
            </h6>
            <h6>
              <span>{checkSquare}</span>
              {item5}
            </h6>
          </div>
        </Col>
        <Col className="pt-5">
          <h1 style={{ textTransform: "uppercase", fontWeight: 700 }}>
            Class <span style={{ color: '#fcd842 '}}>schedule</span>
          </h1>
          <Row className="row-cols-1 row-cols-sm-2">
            <Col className="pb-3">
              <Card className="shadow text-center">
                <h5>Monday</h5>
                <p>8:00 AM - 9:AM</p>
              </Card>
            </Col>
            <Col className="pb-3">
              <Card className="shadow text-center">
                <h5>Monday</h5>
                <p>10:00 AM - 11:AM</p>
              </Card>
            </Col>
            <Col className="pb-3">
              <Card className="shadow text-center">
                <h5>Monday</h5>
                <p>7:00 AM-8:AM</p>
              </Card>
            </Col>
            <Col className="pb-3">
              <Card className="shadow text-center">
                <h5>Monday</h5>
                <p>6:00 PM-7:PM</p>
              </Card>
            </Col>
            <Col className="pb-3">
              <Card className="shadow text-center">
                <h5>Monday</h5>
                <p>8:00 PM-9:PM</p>
              </Card>
            </Col>
            <Col className="pb-3">
              <Card className="shadow text-center">
                <h5>Monday</h5>
                <p>8:00 PM-9:PM</p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ClassDetails;
