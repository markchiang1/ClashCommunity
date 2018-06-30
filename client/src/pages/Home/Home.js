import React, { Component, Fragment } from 'react'
import Roles from '../../Components/Roles'
import Info from '../../Components/Info'
import NavBar from '../../Components/NavBar'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <NavBar />
        <Roles />
        <Info />
      </Fragment>
    )
  }
}

export default Home
