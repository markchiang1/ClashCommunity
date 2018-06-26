import React, { Component, Fragment } from "react";
import Roles from '../../Components/Roles';
import Info from '../../Components/Info';

class Home extends Component {

    render() {
      return (
        <Fragment>
            <Roles />
            <Info />
        </Fragment>
      )
    }
}

export default Home;