import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home/index";
import Offer from "./containers/Offer/index";
import Publish from "./containers/Publish/index";
import Login from "./containers/Login/index";
import SignUp from "./containers/SignUp/index";
import Cookies from "js-cookie";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faTimes,
  faStar,
  faChevronRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./components/MobileMenu";
library.add(faSearch, faTimes, faStar, faChevronRight, faBars);

function App() {
  const [token, setToken] = useState(Cookies.get("tokenUser") || null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [offers, setOffers] = useState([]);
  const limit = 10;
  const [page, setPage] = useState(1);
  const [pageMax, setPageMax] = useState(0);

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
        setOffers={setOffers}
        page={page}
        setPage={setPage}
        setPageMax={setPageMax}
        pageMax={pageMax}
        limit={limit}
      />

      {mobileMenu === true && (
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
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish token={token} />
        </Route>
        <Route path="/">
          <Home
            offers={offers}
            setOffers={setOffers}
            page={page}
            setPage={setPage}
            setPageMax={setPageMax}
            pageMax={pageMax}
            limit={limit}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
