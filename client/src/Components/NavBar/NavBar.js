import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {

  render() {
    return (

    <div>

      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="lol-logo"><img src="https://cdn.shopify.com/s/files/1/3101/3620/products/1_LoL_Logo_editado_300x300.png?v=1519654839" alt="logo" />
          <b>CLASH</b>COMP</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">SETTINGS</a></li>
            <li><a href="badges.html">PROFILE</a></li>
            <li><span id="line"></span></li>
            <li><a id="button" className="waves-effect waves-light btn">Button</a></li>
          </ul>
        </div>
      </nav>

    </div>
    );
  }
}

export default NavBar;