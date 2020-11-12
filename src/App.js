import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home/index";
import Offer from "./containers/Offer/index";
import Login from "./containers/Login/index";
import SignUp from "./containers/SignUp/index";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(Cookies.get("tokenUser") || null);

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
      <Header setUser={setUser} token={token} />

      <Switch>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
