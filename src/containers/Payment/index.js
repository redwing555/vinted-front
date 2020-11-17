import React from "react";
import "./index.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/index";

// Public key Stripe
const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ apiUrl, offer }) => {
  return (
    <section className="payment">
      <Elements stripe={stripePromise}>
        <CheckoutForm apiUrl={apiUrl} offer={offer} />
      </Elements>
    </section>
  );
};

export default Payment;
