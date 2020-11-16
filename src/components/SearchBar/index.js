import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setFilter }) => {
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [priceModal, setPriceModal] = useState(false);

  setFilter(`&title=${search}&priceMin=${priceMin}&priceMax=${priceMax}`);

  const handlePriceMax = (ev) => {
    setPriceMax(ev.target.value);
  };
  const handlePriceMin = (ev) => {
    setPriceMin(ev.target.value);
  };

  const handleClick = () => {
    if (priceModal) {
      setPriceModal(false);
    } else {
      setPriceModal(true);
    }
  };

  return (
    <div className="input-header">
      <div className="select">
        <div onClick={handleClick}>
          <p>Filtres</p>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>

        {priceModal && (
          <div className="filter-price">
            <label>Prix Minimum</label>
            <input onChange={handlePriceMin} type="number" value={priceMin} />
            <label>Prix Maximum</label>
            <input onChange={handlePriceMax} type="number" value={priceMax} />
          </div>
        )}
      </div>

      <fieldset>
        <input
          onChange={(ev) => {
            setSearch(ev.target.value);
          }}
          type="text"
          placeholder="Rechercher des articles"
          value={search}
        />
        <FontAwesomeIcon className="search-icon" icon="search" />
      </fieldset>
    </div>
  );
};

export default SearchBar;
