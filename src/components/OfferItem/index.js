import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = ({ offer }) => {
  return (
    <>
      <div className="offer-product">
        {offer.product_pictures.length === 1 ? (
          <div className="one-picture">
            <img src={offer.product_pictures[0].url} alt="image-item" />
          </div>
        ) : (
          <div className="some-pictures">
            {offer.product_pictures.map((picture, index) => {
              return <img key={index} src={picture.url} alt="image-item" />;
            })}
          </div>
        )}
        <div className="offer">
          <div>
            <p> {offer.product_price} €</p>

            <hr />

            <div className="offer-description">
              <p>MARQUE</p>
              <p>{offer.product_details[0].MARQUE}</p>
            </div>
            {offer.product_details[1].TAILLE && (
              <div className="offer-description">
                <p>TAILLE</p>
                <p>{offer.product_details[1].TAILLE}</p>
              </div>
            )}
            {offer.product_details[2].ÉTAT && (
              <div className="offer-description">
                <p>ÉTAT</p>
                <p>{offer.product_details[2].ÉTAT}</p>
              </div>
            )}
            {offer.product_details[3].COULEUR && (
              <div className="offer-description">
                <p>COULEUR</p>
                <p>{offer.product_details[3].COULEUR}</p>
              </div>
            )}
            {offer.product_details[4] && (
              <div className="offer-description">
                <p>EMPLACEMENT</p>
                <p>{offer.product_details[4].EMPLACEMENT}</p>
              </div>
            )}

            <hr />

            <div className="product-description">
              <p>{offer.product_name}</p>
              <p>{offer.product_description}</p>
            </div>

            <button>Acheter</button>
          </div>
          <div className="user-description">
            <p>
              <img src={offer.owner.account.avatar.url} alt="" />
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

export default index;
