import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Classes = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/events")
      .then((res) => setEvent(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <Container>
      <Row className="row-cols-1 row-cols-sm-3">
        {event.map((item) => (
          <Col key={item.id}>
            <Card style={{ backgroundImage: `url('${item.image}')` }}>
              <p>{item.title}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Classes;
