
import React, { Component } from "react"
import API from "../../utils/API";

class SignUp extends React.Component {

     // Setting the component's initial state
  state = {
    username: "",
    password: "",
    gameName: "",
    rank: "",
    role: "",
    captain: false,

} 

handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    //Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.signUp({
        username: this.state.username,
        password: this.state.password,
        gameName: this.state.gameName,
        rank: this.state.rank,
        role: this.state.role,
        captain: this.state.captain,
    })

    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  };

  render() {
    // 
    return (
        <div className="container">
        
        <form className="form">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <input
            value={this.state.gameName}
            name="gameName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="In-Game-Name"
          />
          <input
            value={this.state.rank}
            name="rank"
            onChange={this.handleInputChange}
            type="text"
            placeholder="rank"
          />
          <input
            value={this.state.role}
            name="role"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Role"
          />
          <input
            value={this.state.captain}
            name="role"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Captain"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}



// add put request w/axios
// add componentwillmount()

export default SignUp;


