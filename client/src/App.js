import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Players from "./pages/Players";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import API from "./utils/API";
import Signup from "./pages/SignUp"

class App extends Component {


  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getPlayers(this.state.players)
      .then(res => this.setState({ players: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/players" component={Players} />
              <Route exact path="/players/:id" component={Profile} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App;