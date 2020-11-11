import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home/index";
import Offer from "./containers/Offer/index";

function App() {
  return (
    <Router>
      <Switch>
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
