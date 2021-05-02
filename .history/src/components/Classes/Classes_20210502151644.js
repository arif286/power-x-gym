import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "../Header/Header";
import './Classes.css';


const Classes = () => {
  const arrow = <FontAwesomeIcon icon={faArrowRight} />;

  const [event, setEvent] = useState([]);
  useEffect(() => {
    axios
      .get("https://power-x-gym-center.herokuapp.com/events")
      .then((res) => setEvent(res.data))
      .catch((err) => console.log(err));
  }, []);

  const classDuration = {
    textTransform: "uppercase",
    marginTop: "auto",
    fontWeight: 800,
    backgroundColor: "#fcd842",
    padding: "10px 0px",
    display: "inline-block !important",
      textAlign: "center",
    marginBottom: '0px'
  };
    let history = useHistory();
    const handleClass = (id) => {
        history.push(`/class/details/${id}`)
  }
  const renderHeader = {
    showHeader: 'class',
    text: 'Our Classes'
  }
  return (
    <>
      <Header renderHeader={renderHeader} />
      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {event.map((item) => (
            <Col className="pb-4" key={item.id}>
              <Card
                onClick={() => {
                  handleClass(item._id);
                }}
                className="w-100 classes"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  minHeight: "400px",
                }}
              >
                <h6 style={classDuration}>
                  {item.title}
                  <span style={{ marginLeft: "5px" }}>{arrow}</span>
                </h6>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Classes;
