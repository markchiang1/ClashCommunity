import React, { Component, Fragment } from "react";
import NavBar from '../../Components/NavBar';
import Roles from '../../Components/Roles';
import Info from '../../Components/Info';

class Home extends Component {

    render() {
      return (
        <Fragment>
            <NavBar />
            <Roles />
            <Info />
        </Fragment>
      )
    }
}

export default Home;