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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="row-cols-1 row-cols-sm-2">
          <Col>
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control"
              {...register("firstName", {
                required: true,
              })}
              type="text"
            />
          </Col>
          <Col>
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control"
              {...register("lastName", {
                required: true,
              })}
              type="text"
            />
          </Col>
          <Col>
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              {...register("email", {
                required: true,
              })}
              type="text"
            />
          </Col>
          <Col>
            <label htmlFor="number">Mobile Number</label>
            <input
              className="form-control"
              {...register("phone", { required: true, valueAsNumber: true })}
              type="number"
            />
          </Col>
          <Col>
            <Row>
              <Col>
                <label className="w-100">Date of Birth</label>
                <DatePicker
                //                   {...register('birthDate', {
                //       required:true,
                //   })}
                  style={{ width: "100%" }}
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
            <label htmlFor="address">Address line:1</label>
            <input className="form-control" {...register('address',{required:true})} type="text" />
          </Col>
          <Col>
            <label htmlFor="country">Country/Region</label>
            <input className="form-control" {...register('country',{required:true})} type="text" />
          </Col>
          <Col>
            <label htmlFor="city"> City</label>
            <input className="form-control" {...register('city',{required:true})} type="text" />
          </Col>
          <Col>
            <label> Postcode</label>
            <input className="form-control" {...register('postcode',{required:true})} type="number" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-right">
            <input className="submit-btn" type="submit" value="Next" />
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default PurchaseForm;
