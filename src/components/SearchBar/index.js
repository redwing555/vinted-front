import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const SearchBar = ({ setOffers, page, limit, setPageMax }) => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const handleSearch = async (ev) => {
    setSearch(ev.target.value);

    try {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&sort=${select}&page=${page}&limit=${limit}`
      );
      setOffers(response.data.offers);
      setPageMax(Math.round(Number(response.data.count) / limit));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSelect = (ev) => {
    setSelect(ev.target.value);
  };
  return (
    <div className="input-header">
      <select value={select} onChange={handleSelect}>
        <option value="">Filtres</option>
        <option value="price-asc">Prix croissant</option>
        <option value="price-desc">Prix décroissant</option>
      </select>
      <fieldset>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Rechercher des articles"
          value={search}
        />
        <FontAwesomeIcon icon="search" />
      </fieldset>
    </div>
  );
};

export default SearchBar;
