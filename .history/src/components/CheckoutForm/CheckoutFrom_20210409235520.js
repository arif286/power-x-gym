import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
// import "../styles/common.css";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <Row className="row-cols-1">
      <form className='text-center' onSubmit={handleSubmit}>
        <Col xs={10} md={6}>
          <label>
            Card number
            <CardNumberElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={(event) => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
        </Col>
        <Col xs={10} md={6}>
          <label>
            Expiration date
            <CardExpiryElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={(event) => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
        </Col>
        <Col xs={10} md={6}>
          <label>
            CVC
            <CardCvcElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={(event) => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </label>
        </Col>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </Row>
  );
};
export default CheckoutForm;
