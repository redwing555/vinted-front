import { Link } from "react-router-dom";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/img/vinted.png";
import SearchBar from "../SearchBar";

const Header = ({ setUser, token, setMobileMenu, mobileMenu, setFilter }) => {
  const handleMobile = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
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

            <SearchBar setFilter={setFilter} />
          </div>
          <div>
            {token ? (
              <div className="logout" onClick={handleClick}>
                Déconnexion
              </div>
            ) : (
              <Link to="/login" className="login-signup">
                S'inscrire | Se Connecter
              </Link>
            )}

            <Link to={"/publish"}>
              <button>Vends tes articles</button>
            </Link>
          </div>
          <FontAwesomeIcon
            onClick={handleMobile}
            className="menu-mobile"
            icon={mobileMenu ? "times" : "bars"}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
