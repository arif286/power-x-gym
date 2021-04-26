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
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {event.map((item) => (
          <Col className="pb-4" key={item.id}>
            <Card
              className="w-100"
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "400px",
              }}
            >
              <p>{item.title}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Classes;
