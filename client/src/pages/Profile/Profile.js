import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from '../../Components/NavBar';

class Profile extends Component {
    state = {
        name: "",
        character: ""
      };


render() {
    return (
      <div>
        <NavBar />
        <h3>profile page</h3>
      </div>
    )
  }
};

export default Profile;
