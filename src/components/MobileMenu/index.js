import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const MobileMenu = ({ token, setMobileMenu, setUser }) => {
  const handleClick = () => {
    setMobileMenu(false);
    setUser(null);
  };

  const handleMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      <section className="mobile-menu">
        <div className="container">
          <div>
            {token ? (
              <div className="logout" onClick={handleClick}>
                Déconnexion
              </div>
            ) : (
              <Link to="/login" onClick={handleMenu}>
                <div className="login-signup">S'inscrire | Se Connecter</div>
              </Link>
            )}

            <Link to="/publish" onClick={handleMenu}>
              <button>Vends tes articles</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileMenu;
