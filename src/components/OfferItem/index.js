import React from "react";

const index = ({ offer }) => {
  return (
    <div className="offer-product">
      <div>
        <img src={offer.product_pictures[0].url} alt="" />
      </div>
      <div>
        <p> {offer.product_price} €</p>
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

        <div className="user-description">
          <p>{offer.product_name}</p>
          <p>{offer.product_description}</p>
        </div>

        <button>Acheter</button>
      </div>
    </div>
  );
};

export default index;
