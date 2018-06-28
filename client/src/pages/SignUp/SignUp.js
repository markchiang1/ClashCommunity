
import React, { Component, Fragment } from "react"
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
      <Fragment>
        <div className="site">
          <header className="log-header">
            <div className="layout-container layout-flex">
              <a href="/" className="log-title"><img src="https://cdn.shopify.com/s/files/1/3101/3620/products/1_LoL_Logo_editado_300x300.png?v=1519654839" alt="logo" /><strong>CLASH</strong>COMP</a>
              <div className="layout-flex-spacer"></div>
              <div className="log-nav">
                <a href="#">TEAMS</a>
                {/* <button id='log-button' href="/SignUp">SIGN UP</button> */}
              </div>
            </div>
          </header>
          <section className="slice slice--teams">
            <div className="slice__inner">
              <div className="layout-container">
                <h2>Sign Up!</h2>
              </div>
            </div>
            <iframe width="820" height="465" frameBorder="3" allowFullScreen loop="1"
              src="https://www.youtube.com/embed/vccdrVAAs3o?autoplay=1&controls=1&showinfo=0&autohide=1&mute=1&frameborder=0&loop=1">
            </iframe>
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
          </section>
        </div>
      </Fragment>
    );
  }
}



// add put request w/axios
// add componentwillmount()

export default SignUp;


