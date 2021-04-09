import DateFnsUtils from "@date-io/date-fns";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Step, Stepper } from "react-form-stepper";
import { useForm } from "react-hook-form";
import "./PurchaseForm.css";

const PurchaseForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };
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
                <label>Date of Birth</label>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker

                    // variant="filled"
                    style={{ width: "100%" }}
                    format="dd/MM/yyyy"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Col>
            </Row>
          </Col>
          <Col>
            <label>Gender</label>
            <select
              className="form-control"
              {...register("gender", { required: true })}
            >
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </Col>
          <Col>
            <label htmlFor="address">Address line:1</label>
            <input
              className="form-control"
              {...register("address", { required: true })}
              type="text"
            />
          </Col>
          <Col>
            <label htmlFor="country">Country/Region</label>
            <input
              className="form-control"
              {...register("country", { required: true })}
              type="text"
            />
          </Col>
          <Col>
            <label htmlFor="city"> City</label>
            <input
              className="form-control"
              {...register("city", { required: true })}
              type="text"
            />
          </Col>
          <Col>
            <label> Postcode</label>
            <input
              className="form-control"
              {...register("postcode", { required: true })}
              type="number"
            />
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
