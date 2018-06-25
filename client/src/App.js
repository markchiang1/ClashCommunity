import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Players from "./pages/Players";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/players" component={Players} />
              <Route exact path="/players/:id" component={Profile} />
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App;