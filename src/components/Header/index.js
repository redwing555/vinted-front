import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/img/vinted.png";

const Header = ({ setUser, token, setModalLogin }) => {
  const handleLogin = () => {
    setModalLogin(true);
    document.body.style.overflow = "hidden";
  };

  const handleClick = () => {
    setUser(null);
  };
  return (
    <>
      <header>
        <div className="container">
          <div>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <div className="input-header">
              <input type="text" placeholder="Rechercher des articles" />
              <FontAwesomeIcon icon="search" />
            </div>
          </div>
          <div>
            {token ? (
              <div className="logout" onClick={handleClick}>
                Déconnexion
              </div>
            ) : (
              <div className="login-signup" onClick={handleLogin}>
                S'inscrire | Se Connecter
              </div>
            )}

            <Link to="/publish">
              <button>Vends tes articles</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
