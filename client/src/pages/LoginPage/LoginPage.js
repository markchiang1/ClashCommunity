import React, { Component, Fragment } from "react";
import Login from '../../Components/Login';
import axios from 'axios';

class LoginPage extends Component {

  constructor() {
    super()
    this.state = {
        loggedIn: false,
        user: null
    }
    this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
}
componentDidMount() {
    axios.get('/auth/user').then(response => {
        console.log(response.data)
        if (!!response.data.user) {
            console.log('THERE IS A USER')
            this.setState({
                loggedIn: true,
                user: response.data.user
            })
        } else {
            this.setState({
                loggedIn: false,
                user: null
            })
        }
    })
}

_logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
        console.log(response.data)
        if (response.status === 200) {
            this.setState({
                loggedIn: false,
                user: null
            })
        }
    })
}

_login(username, password) {
    axios
        .post('/auth/login', {
            username,
            password
        })
        .then(response => {
            console.log(response)
            //right now this method is returning 200 everytime & setting state of app to logged in.
            //We need to figure out how to set up the post route on line 57
            if (response.status === 200) {
                // update the state
                this.setState({
                    loggedIn: true,
                    user: response.data.user
                })
            }
        })
}
    render() {
      return (
        <Fragment>
            <Login />
        </Fragment>
      )
    }
}

export default LoginPage;
