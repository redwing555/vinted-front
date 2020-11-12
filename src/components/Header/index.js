import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/vinted.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <input type="text" placeholder="Rechercher des articles" />
        </div>
        <div>
          <Link className="login-button" to="/login">
            S'inscrire | Se connecter
          </Link>
          <button>Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
