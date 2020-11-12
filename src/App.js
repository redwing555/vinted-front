import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home/index";
import Offer from "./containers/Offer/index";
import Login from "./containers/Login/index";
import SignUp from "./containers/SignUp/index";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
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
