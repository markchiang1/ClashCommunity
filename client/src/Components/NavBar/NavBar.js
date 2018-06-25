import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {

  render() {
    return (

    <div>

      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="lol-logo"><img src="http://img11.hostingpics.net/thumbs/mini_130684LOLico.png" alt="logo" />
          <b>CLASH</b>COMP</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">SETTINGS</a></li>
            <li><a href="badges.html">PROFILE</a></li>
            <li><span id="line"></span></li>
            {/* <!-- Dropdown Trigger --> */}
            <li><a id="button" className="waves-effect waves-light btn">Button</a></li>
          </ul>
        </div>
      </nav>

    </div>
    );
  }
}

export default NavBar;