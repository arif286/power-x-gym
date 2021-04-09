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
          <label htmlFor="">First Name</label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor="">Last Name</label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor="">Email</label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor="">Mobile Number</label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <Row>
            <Col>
              <label>Date of Birth</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Col>
          </Row>
        </Col>
              <Col>
                  <label>Gender</label>
          <select>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </Col>
        <Col>
          <label htmlFor="">Address line:1</label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor="">Address line:2</label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor="">Country/Region</label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor=""> City</label>
          <input name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor=""> Postcode</label>
          <input name="first name" type="text" />
        </Col>
      </Row>
    </Container>
  );
};

export default PurchaseForm;
