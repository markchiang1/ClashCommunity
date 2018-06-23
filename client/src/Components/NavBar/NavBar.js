import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  render () {
    return (

      <div>

        {/* <!-- Dropdown Structure --> */}
        <ul id='dropdown1' className='dropdown-content'>
          <li><a href='#!'>one</a></li>
          <li><a href='#!'>two</a></li>
          <li className='divider' />
          <li><a href='#!'>three</a></li>
        </ul>

        <nav>
          <div className='nav-wrapper'>
            <a href='#!' className='brand-logo'>Logo</a>
            <ul className='right hide-on-med-and-down'>
              <li><a href='sass.html'>Settings</a></li>
              <li><a href='badges.html'>Profile</a></li>
              {/* <!-- Dropdown Trigger --> */}
              <li><a id='button' className='waves-effect waves-light btn'>Button</a></li>
            </ul>
          </div>
        </nav>

        {/* <!-- Dropdown Trigger -->
      <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

      <!-- Dropdown Structure -->
      <ul id='dropdown1' className='dropdown-content'>
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider" tabindex="-1"></li>
        <li><a href="#!">three</a></li>
        <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
        <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
      </ul> */}

      </div>
    )
  }
}

export default NavBar
