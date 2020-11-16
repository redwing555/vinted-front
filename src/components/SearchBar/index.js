import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const SearchBar = ({ setFilter }) => {
  const [search, setSearch] = useState("");
  setFilter(search);

  return (
    <div className="input-header">
      <select>
        <option value="">Filtres</option>
        <option value="price-asc">Prix croissant</option>
        <option value="price-desc">Prix décroissant</option>
      </select>
      <fieldset>
        <input
          onChange={(ev) => {
            setSearch(ev.target.value);
          }}
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
