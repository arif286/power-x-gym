import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import React, { useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import './CheckoutForm.css';

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

const CheckoutForm = ({ payment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("click me");

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      setPaymentError(error.message);
    } else {
      setPaymentError(null);
      payment(paymentMethod.id);
      console.log(paymentMethod);
    }
  };

  return (
    <Row className="row-cols-1 justify-content-center mt-5">
      <Col xs={10} md={8}>
        <form onSubmit={handleSubmit}>
          <label className="w-100">
            Card number
            <CardNumberElement options={options} />
          </label>
          <label className="w-100">
            Expiration date
            <CardExpiryElement options={options} />
          </label>
          <label className="w-100">
            CVC
            <CardCvcElement options={options} />
          </label>
          <button className="payment-btn" type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
            {paymentError && <p style={{color:'red', marginTop:'15px'}}>{ paymentError}</p>}
      </Col>
    </Row>
  );
};
export default CheckoutForm;
