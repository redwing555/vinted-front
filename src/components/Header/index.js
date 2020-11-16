import { Link } from "react-router-dom";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/img/vinted.png";
import SearchBar from "../SearchBar";

const Header = ({
  setUser,
  token,
  setMobileMenu,
  mobileMenu,
  setOffers,
  page,
  limit,
  setPageMax,
}) => {
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

            <SearchBar
              setOffers={setOffers}
              page={page}
              limit={limit}
              setPageMax={setPageMax}
            />
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

            <Link to={token ? "/publish" : "/login"}>
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
