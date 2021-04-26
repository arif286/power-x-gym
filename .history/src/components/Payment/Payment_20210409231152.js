import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutFrom";

const stripePromise = loadStripe(
  "pk_test_51IeFj2EPnVwugJIPP9OtaSrwg0Xqlc1yvbLglcE8Rp38MVrRNWPwe0HdTJiOr9LmrRegBrj6JoSBAhXjmVYdNEcT00BZLKGVX7"
);
const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
export default Payment;