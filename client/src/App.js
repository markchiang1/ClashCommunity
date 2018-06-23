import React, { Component, Fragment } from 'react'
import './App.css'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar'
import Roles from './Components/Roles'

import Home from './pages/Home'

class App extends Component {
  render () {
    return (
      <Fragment>

        <NavBar />
        <Roles />
        <Home />
        {/* <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/users" component={Players} />
              <Route exact path="/users/:id" component={Profile} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router> */}

      </Fragment>
    )
  }
}

export default App
