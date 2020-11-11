import React from "react";

const index = ({ offer }) => {
  return (
    <div className="offer-product">
      <div>
        <img src={offer.product_pictures[0].url} alt="" />
      </div>
      <div>
        <p> {offer.product_price}</p>
        <div className="offer-description">
          <p>MARQUE</p>
          <p>{offer.product_details[0].MARQUE}</p>
        </div>
        <div className="offer-description">
          <p>TAILLE</p>
          <p>{offer.product_details[1].TAILLE}</p>
        </div>
        <div className="offer-description">
          <p>ÉTAT</p>
          <p>{offer.product_details[2].ETAT}</p>
        </div>
        <div className="offer-description">
          <p>COULEUR</p>
          <p>{offer.product_details[3].couleur}</p>
        </div>
        {offer.product_details[4].EMPLACEMENT && (
          <div className="offer-description">
            <p>EMPLACEMENT</p>
            <p>{offer.product_details[4].EMPLACEMENT}</p>
          </div>
        )}

        <hr />

        <div>
          <p>{offer.product_name}</p>
          <p>{offer.product_description}</p>
        </div>

        <div className="user">
          <img src={offer.owner.account.avatar.url} alt="" />
          <p>{offer.owner.account.username}</p>
        </div>
        <button>Acheter</button>
      </div>
    </div>
  );
};

export default index;
