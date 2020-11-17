import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/index";

// Public key Stripe
const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
// pk_live_Q22EEz7WJRaLFwbHYYi7ZiGC00EJnkGewM
const Payment = ({ apiUrl }) => {
  const location = useLocation();

  return (
    <section className="payment">
      {location.state ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm
            apiUrl={apiUrl}
            price={location.state.price}
            name={location.state.name}
            picture={location.state.picture}
          />
        </Elements>
      ) : (
        <Redirect to="/" />
      )}
    </section>
  );
};

export default Payment;
