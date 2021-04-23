import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const CheckoutForm = ({ apiUrl, price, name, picture, description }) => {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState(false);
  const shipping = 3.28;
  const protection = 7.45;
  const total = (shipping + protection + price).toFixed(2).toString();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: name,
      });
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(`${apiUrl}/payment`, {
        token: stripeToken,
        title: name,
        amount: total,
      });
      if (response.data.status === "succeeded") {
        setSuccess(true);
        history.push("/");
        alert("Achat validé !");
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
            <div className="order">
              <div>
                <div>
                  <img src={picture} alt="" />
                </div>
                <div>
                  <p>{name}</p>
                  <p className="order-description">{description}</p>
                </div>
              </div>
              <div>
                <p>{price} €</p>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <p className="title">Adresse</p>
          <div>
            <input type="text" placeholder="Nom complet" />
            <input type="text" placeholder="Adresse" />
          </div>
          <div>
            <input type="text" placeholder="Code postal" />
            <input type="text" placeholder="Ville" />
          </div>
        </fieldset>
        <fieldset>
          <p className="title">Paiement</p>
          <CardElement className="credit-card" />
        </fieldset>
      </div>
      <div>
        <fieldset className="fieldset-resume">
          <div className="resume">
            <p>Résumé de la commande</p>
            <div>
              <p>Commande</p>
              <p>{price} €</p>
            </div>
            <div>
              <p>
                Frais protection acheteurs{" "}
                <FontAwesomeIcon icon={faInfoCircle} />
              </p>
              <p>{protection} €</p>
            </div>
            <div>
              <p>Frais de port</p>
              <p>{shipping} €</p>
            </div>
          </div>
          <div className="checkout">
            <div>
              <p>Total</p>
              <p>{total} €</p>
            </div>
            <div>
              <button type="submit">Payer maintenant</button>
              <div className="secure-paiement">
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
