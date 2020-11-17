import React, { useState } from "react";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const CheckoutForm = ({ apiUrl, offer }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "hello",
      });
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(`${apiUrl}/payment`, {
        stripeToken: stripeToken,
      });
      if (response.data.status === "succeeded") {
        setSuccess(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <fieldset>
          <div>
            <p className="title">Commande</p>
            <div>
              <p>Image</p>
              <p>prix</p>
              {/* <p>{offer.product_name}</p> */}
            </div>
          </div>
        </fieldset>

        <fieldset>
          <p className="title">Adresse</p>
          <input type="text" placeholder="Nom complet" />
          <input type="text" placeholder="Adresse" />
          <input type="text" placeholder="Code postal" />
          <input type="text" placeholder="Ville" />
        </fieldset>
        <fieldset>
          <p className="title">Paiement</p>
          <CardElement />
        </fieldset>
      </div>
      <div>
        <fieldset>
          <div className="resume">
            <p>Résumé de la commande</p>
            <div>
              <p>Commande</p>
              <p>130€</p>
            </div>
            <div>
              <p>Frais protection acheteurs</p>
              <p>7€</p>
            </div>
            <div>
              <p>Frais de port</p>
              <p>3,28€</p>
            </div>
          </div>
          <div className="checkout">
            <div>
              <p>Total</p>
              <p>price</p>
            </div>
            <div>
              <button type="submit">Payer maintenant</button>
              <div>
                <FontAwesomeIcon icon={faShieldAlt} />
                <p>Ce paiement est crypté et sécurisé</p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </form>
  );
};

export default CheckoutForm;
