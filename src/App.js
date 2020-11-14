import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home/index";
import Offer from "./containers/Offer/index";
import Publish from "./containers/Publish/index";
import Cookies from "js-cookie";
import ModalLogin from "./components/ModalLogin/index";
import ModalSignUp from "./components/ModalSignUp/index";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faTimes,
  faStar,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faTimes, faStar, faChevronRight);

function App() {
  const [token, setToken] = useState(Cookies.get("tokenUser") || null);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);

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
      {modalLogin === true && (
        <ModalLogin
          setUser={setUser}
          setModalLogin={setModalLogin}
          setModalSignUp={setModalSignUp}
        />
      )}

      {modalSignUp === true && (
        <ModalSignUp setUser={setUser} setModalSignUp={setModalSignUp} />
      )}

      <Header setUser={setUser} token={token} setModalLogin={setModalLogin} />

      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/publish">
          <Publish />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
