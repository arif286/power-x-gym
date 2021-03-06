import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Step, Stepper } from "react-form-stepper";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import Payment from "../Payment/Payment";
import "./PurchaseForm.css";

const PurchaseForm = () => {
   const stepperStyle = {
      activeBgColor: "#fcd842",
      completedBgColor: "#fcd842",
  };
  const renderHeader = {
    showHeader: 'memberShip',
    text: 'your gym membership'
  }

  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    // e.target.reset();
  };
    const [stepOver, setStepOver] = useState(false);
    const [step, setStep] = useState(0);
    const handlePayment = () => {
      setStep(step + 1)
      setStepOver();
    }

  return (
    <>
      <Header renderHeader={renderHeader} />
      <Container>
        <Row>
          <Col>
            <Stepper activeStep={step} styleConfig={stepperStyle}>
              <Step label="Personal Details" />
              <Step label="Bank Payment" />
              <Step label="Membership Created" />
            </Stepper>
          </Col>
        </Row>
        {stepOver ? (
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
                  {...register("phone", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="number"
                />
              </Col>
              <Col>
                <Row>
                  <Col>
                    <label>Date of Birth</label>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        style={{ width: "100%" }}
                        format="dd/MM/yyyy"
                        id="date-picker-inline"
                        value={selectedDate}
                        required="true"
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
                <input
                  className="submit-btn"
                  type="submit"
                  value="Next"
                  onClick={() => {
                    handlePayment(true);
                  }}
                />
              </Col>
            </Row>
          </form>
        ) : (
          <Row>
            <Col>
              <Payment />
              <input
                className="submit-btn"
                type="submit"
                value="Next"
                onClick={() => {
                  handlePayment(true);
                }}
              />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default PurchaseForm;
