import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PurchaseForm = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <Container>
      <Row className="row-cols-1 row-cols-sm-2">
        <Col>
          <label htmlFor=""></label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor=""></label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor=""></label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor=""></label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <Row>
            <Col>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <select>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </Col>
      </Row>
    </Container>
  );
};

export default PurchaseForm;
