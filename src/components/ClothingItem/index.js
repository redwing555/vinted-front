import React from "react";
import { Link } from "react-router-dom";

const ClothingItem = ({ offers }) => {
  console.log(offers);
  return offers.map((item, index) => {
    const offerId = item._id;
    return (
      <Link to={`/offer/${offerId}`}>
        <div className="home-product-item">
          <div>
            <img src={item.owner.account.avatar.url} alt="" />
            <p>{item.owner.account.username}</p>
          </div>
          <img src={item.product_image.url} alt="" />
          <div className="product-price">
            <p>{item.product_price} €</p>
            <p>LIKE</p>
          </div>
          <p>{item.product_details[1].TAILLE}</p>
          <p>{item.product_details[0].MARQUE}</p>
        </div>
      </Link>
    );
  });
};

export default ClothingItem;
