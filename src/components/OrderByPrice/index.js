import React, { useState } from "react";
import "./index.css";

const OrderByPrice = ({ setSort }) => {
  const [select, setSelect] = useState("");
  setSort(select);

  return (
    <div className="orderByPrice">
      <select
        value={select}
        onChange={(ev) => {
          setSelect(ev.target.value);
        }}
      >
        <option value="">Trier par prix</option>
        <option value="price-asc">Prix croissant</option>
        <option value="price-desc">Prix décroissant</option>
      </select>
    </div>
  );
};

export default OrderByPrice;
