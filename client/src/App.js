import React, { Component } from "react";
import axios from 'axios';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from './Components/NavBar';
// import Players from "./pages/Players";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
// import Matchlist from "./pages/Matchlist";


class App extends Component {
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
			<Router>
				<div>
					{/* <NavBar /> */}
					<Switch>
						<Route exact path="/" component={Home} />
						{/* <Route exact path="/players" component={Players} /> */}
						{/* <Route exact path="/players/:id" component={Profile} /> */}
						{/* <Route exact path="/login" component={Login} _login={this._login}/> */}
						<Route
							exact path='/login'
							render={(props) => <Login {...props} _login={this._login} />}
						/>
						{/* <Route exact path="/matchlist" component={Matchlist} /> */}
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;