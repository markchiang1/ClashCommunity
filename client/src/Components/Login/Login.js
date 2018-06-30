import React, { Component, Fragment } from 'react';
import './Login.css'

class Login extends Component {
  constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			// redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
    event.preventDefault()
    console.log(this.props)
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/Home.js'
		})
	}
  render() {
    // if (this.state.redirectTo) {
		// 	return <Redirect to={{ pathname: this.state.redirectTo }} />
    // } else { 
      return (
      <Fragment>
        <div className="site">
          <header className="log-header">
            <div className="layout-container layout-flex">
              <a href="/" className="log-title"><img src="https://cdn.shopify.com/s/files/1/3101/3620/products/1_LoL_Logo_editado_300x300.png?v=1519654839" alt="logo" /><strong>CLASH</strong>COMP</a>
              <div className="layout-flex-spacer"></div>
              <div className="log-nav">
                <a href="#Home">TEAMS</a>
                <a id='log-button' href="/signup">SIGN UP</a>
              </div>
            </div>
          </header>

          <section className="log-jumbo">
            <div className="log-jumbo__inner">
              <div className="layout-container">
                <div className="layout-row">
                  <div className="layout-col">
                    <div className="log-jumbo__content">
                      <img id="clashGif" src="/assets/img/clash6.gif" alt="logo" />
                      {/* <h2>Your</h2>
                      <h1><strong>LOL CLASH</strong></h1>
                      <h2>Connection</h2> */}
                    </div>
                  </div>
                  <div className="layout-col">
                    <div className="log-jumbo__form">
                      <form className="sign-up">
                        <div className="sign-up__inner">
                          <h5><strong>SIGN IN</strong></h5>
                          <div>
                            <label>UserName</label>
                            <input type="text" name="username" id="username" placeholder="User Name" 
                            value={this.state.username}
                            onChange={this.handleChange}
                            />
                          </div>
                          <div>
                            <label>Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" 
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                          </div>
                          <div>
                          {/* <input type="submit" className="button button--solid" onClick={this.handleSubmit} value="START">START</input> */}
                          {/* original code below */}
                            <input type="submit" onClick={this.handleSubmit} className="button button--solid" value="START" />
                          </div>
                          <div>
                            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="slice slice--teams">
            <div className="slice__inner">
              <div className="layout-container">
              <h2>Find Your Dream Team</h2>
                <ul className="logos-list">
                  <li>
                    <a href="#Home">
                      <img src="https://api.finalround.gg/themes/images/team-tl.png" alt="Team Liquid" />
                    </a>
                  </li>
                  <li>
                    <a href="#Home">
                      <img src="https://api.finalround.gg/themes/images/team-fnc.png" alt="Fnatic" />
                    </a>
                  </li>
                  <li>
                    <a href="#Home">
                      <img src="https://api.finalround.gg/themes/images/team-c9.png" alt="Cloud 9" />
                    </a>
                  </li>
                  <li>
                    <a href="#Home">
                      <img src="https://api.finalround.gg/themes/images/team-tsm.png" alt="TSM" />
                    </a>
                  </li>
                  <li>
                    <a href="#Home">
                      <img src="https://api.finalround.gg/themes/images/team-imt.png" alt="Immortals" />
                    </a>
                  </li>
                  <li>
                    <a href="#Home">
                      <img src="https://api.finalround.gg/themes/images/team-og.png" alt="Optic Gaming" />
                    </a>
                  </li>
                  <li>
                    <a href="#Home">
                      <img src="https://api.finalround.gg/themes/images/team-p1.png" alt="Pheonix1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <iframe title="This is a unique title" width="820" height="465" frameBorder="3" allowFullScreen loop="1" 
              src="https://www.youtube.com/embed/vccdrVAAs3o?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&frameborder=0">
            </iframe>

          </section>
          
        </div>
      </Fragment>
    );
  }
}
// }
export default Login;