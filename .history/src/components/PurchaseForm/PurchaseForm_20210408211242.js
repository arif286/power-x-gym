import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Step, Stepper } from "react-form-stepper";
import { useForm } from "react-hook-form";
import "./PurchaseForm.css";

const PurchaseForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <Row>
        <Col>
          <Stepper activeStep={0}>
            <Step label="Personal Details" />
            <Step label="Bank Payment" />
            <Step label="Membership Created" />
          </Stepper>
        </Col>
      </Row>
      <Row className="row-cols-1 row-cols-sm-2">
        <Col>
          <label htmlFor="firstName">First Name</label>
          <input className="form-control" name="firstName" type="text" />
        </Col>
        <Col>
          <label htmlFor="lastName">Last Name</label>
          <input className="form-control" name="lastName" type="text" />
        </Col>
        <Col>
          <label htmlFor="email">Email</label>
          <input className="form-control" name="email" type="text" />
        </Col>
        <Col>
          <label htmlFor="number">Mobile Number</label>
          <input className="form-control" name="number" type="text" />
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="w-100">Date of Birth</label>
              <DatePicker
                name="birthDate"
                style={{ width: "center" }}
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
            <option>select</option>
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
      <Row className="mt-5">
        <Col className="text-right">
          <input
            className="submit-btn"
            type="submit"
            value="Next"
            onSubmit={handleSubmit(onSubmit)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PurchaseForm;
