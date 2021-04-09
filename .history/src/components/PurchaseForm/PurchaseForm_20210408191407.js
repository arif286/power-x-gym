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
          <input className="form-control" name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor="">Last Name</label>
          <input className="form-control" name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor="">Email</label>
          <input className="form-control" name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor="">Mobile Number</label>
          <input className="form-control" name="first name" type="text" />
        </Col>
        <Col>
          <Row>
            <Col>
              <label className='w-100'>Date of Birth</label>
                <DatePicker
                style={{width:'center'}}
                className="form-control"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <label>Gender</label>
          <select className="form-control">
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </Col>
        <Col>
          <label htmlFor="">Address line:1</label>
          <input className="form-control" name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor="">Country/Region</label>
          <input className="form-control" name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor=""> City</label>
          <input className="form-control" name="first name" type="text" />
        </Col>
        <Col>
          <label htmlFor=""> Postcode</label>
          <input className="form-control" name="first name" type="text" />
        </Col>
          </Row>
          <Row className='mt-5'>
              <Col className='text-right'>
                  <input type='submit' />
              </Col>
          </Row>
    </Container>
  );
};

export default PurchaseForm;
