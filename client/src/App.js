import React, { Component, } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Players from "./pages/Players";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import API from "./utils/API";
import Signup from "./pages/SignUp"
import LoginPage from "./pages/LoginPage";



class App extends Component {


 handleFormSubmit = event => {
   // When the form is submitted, prevent its default behavior, get player update and set state
   event.preventDefault();
   API.getPlayers(this.state.players)
     .then(res => this.setState({ players: res.data }))
     .catch(err => console.log(err));
 };

 render() {
   return (
       <Router>

         <div>
           <Switch>
             {/* <Route exact path="/" component={Login} /> */}
             <Route exact path="/home" component={Home} />
             <Route exact path="/players" component={Players} />
             <Route exact path="/players/:id" component={Profile} />
             <Route exact path="/signup" component={Signup} />
             <Route exact path="/" component={LoginPage} />
           </Switch>
         <Footer />
         </div>
       </Router>

   )
 }
} 	

export default App;

