import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OfferItem = ({ offer }) => {
  let history = useHistory();

  return (
    <>
      <div className="offer-product">
        {offer.product_pictures.length === 0 ? (
          <div className="one-picture">
            <img src={offer.product_image.secure_url} alt="" />
          </div>
        ) : offer.product_pictures.length === 1 ? (
          <div className="one-picture">
            <img src={offer.product_pictures[0].url} alt="" />
          </div>
        ) : (
          <div className="some-pictures">
            {offer.product_pictures.map((picture, index) => {
              return <img key={index} src={picture.url} alt="" />;
            })}
          </div>
        )}
        <div>
          <div className="offer">
            <p> {offer.product_price} €</p>

            <hr />

            {offer.product_details.map((item, index) => {
              const keys = Object.keys(item);

              return (
                <div key={index} className="offer-description">
                  <p>{keys[0]}</p>
                  <p>{item[keys[0]]}</p>
                </div>
              );
            })}

            <hr />

            <div className="product-description">
              <p>{offer.product_name}</p>
              <p>{offer.product_description}</p>
            </div>
            <button
              onClick={() => {
                history.push("/payment", {
                  price: offer.product_price,
                  name: offer.product_name,
                  description: offer.product_details[0].MARQUE,
                  picture: offer.product_image.secure_url,
                });
              }}
            >
              Acheter
            </button>
          </div>
          <div className="user-description">
            <p>
              {offer.owner.account.avatar && (
                <img src={offer.owner.account.avatar.url} alt="" />
              )}
            </p>
            <div>
              <p>{offer.owner.account.username}</p>
              <div className="rating">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
              </div>
            </div>
            <FontAwesomeIcon icon={"chevron-right"} />
          </div>
          <div>
            <p className="cgv">
              Le droit de rétractation (article L. 221-18 du code de la
              consommation) et la garantie légale de conformité (article L.
              217-4 et suivants du même code) ne sont pas applicables à votre
              transaction. La garantie des vices cachés (article 1641 et
              suivants du code civil) est toutefois applicable.Vous pouvez
              également consulter les dispositions relatives au droit des
              obligations et à la responsabilité civile. Dans tous les cas, si
              vous payez via Vinted, votre achat est couvert par la Protection
              Acheteurs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferItem;
