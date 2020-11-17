import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home";
import Payment from "./containers/Payment";
import Offer from "./containers/Offer";
import Publish from "./containers/Publish";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Cookies from "js-cookie";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faTimes,
  faStar,
  faChevronRight,
  faBars,
  faCaretDown,
  faUpload,
  faChevronLeft,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./components/MobileMenu";
library.add(
  faSearch,
  faTimes,
  faStar,
  faChevronRight,
  faBars,
  faCaretDown,
  faUpload,
  faChevronRight,
  faChevronLeft,
  faShieldAlt
);

function App() {
  const [token, setToken] = useState(Cookies.get("tokenUser") || null);

  // Modal du menu mobile
  const [mobileMenu, setMobileMenu] = useState(false);

  // State qui regroupe dans un tableau toutes les offres issues de la recherche filtrée
  const [offers, setOffers] = useState([]);

  // State qui permet de filtrer la recherche
  const [filter, setFilter] = useState("");

  // API du backend
  const apiUrl = "https://lereacteur-vinted-api.herokuapp.com";

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookies.set("tokenUser", tokenToSet, { expires: 20 });
      setToken(tokenToSet);
    } else {
      Cookies.remove("tokenUser");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header
        setUser={setUser}
        token={token}
        setMobileMenu={setMobileMenu}
        mobileMenu={mobileMenu}
        apiUrl={apiUrl}
        setFilter={setFilter}
      />

      {mobileMenu && (
        <MobileMenu
          token={token}
          setMobileMenu={setMobileMenu}
          setUser={setUser}
        />
      )}

      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>

        <Route path="/payment">
          {token ? <Payment apiUrl={apiUrl} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser} apiUrl={apiUrl} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} apiUrl={apiUrl} />
        </Route>
        <Route exact path="/publish">
          {token ? (
            <Publish token={token} apiUrl={apiUrl} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/">
          <Home
            offers={offers}
            setOffers={setOffers}
            filter={filter}
            apiUrl={apiUrl}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
