import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="jumbotron page-top">
          <h1>Welcome to the Google Books Search!</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/results" component={Results} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
