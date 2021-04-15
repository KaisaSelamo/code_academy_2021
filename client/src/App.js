import React from "react";
// browser router näyttää yleensä loogiselta käyttäjälle
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import StylingSamples from "./containers/StylingSamples/StylingSamples";
import Cars from "./containers/Cars/Cars";
import NavBar from "./NavBar";
import "./NavBar.css";

// Router oltava mahdollisimman korkealla tasolla
// switch exact viittaa täydelliseen polkuun
// ilman sitä mikä tahansa "linkki" veisi etusivulle (kokeile)
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/styling">
            <StylingSamples />
          </Route>
          <Route path="/cars">
            <Cars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
