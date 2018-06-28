import React, { Component, Fragment } from 'react';
import './Login.css'

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className="site">
          <header className="log-header">
            <div className="layout-container layout-flex">
              <a href="/" className="log-title"><img src="https://cdn.shopify.com/s/files/1/3101/3620/products/1_LoL_Logo_editado_300x300.png?v=1519654839" alt="logo" /><strong>CLASH</strong>COMP</a>
              <div className="layout-flex-spacer"></div>
              <div className="log-nav">
                <a href="#">TEAMS</a>
                <button id='log-button' href="#">SIGN UP</button>
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
                            <input type="text" name="userName" id="userName" placeholder="User Name" />
                          </div>
                          <div>
                            <label>Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" />
                          </div>
                          <div>
                            <input type="submit" className="button button--solid" value="START" />
                          </div>
                          <div>
                            <p>Don't have an account? <a href="#">Sign up!</a></p>
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
                    <a href="#">
                      <img src="https://api.finalround.gg/themes/images/team-tl.png" alt="Team Liquid" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://api.finalround.gg/themes/images/team-fnc.png" alt="Fnatic" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://api.finalround.gg/themes/images/team-c9.png" alt="Cloud 9" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://api.finalround.gg/themes/images/team-tsm.png" alt="TSM" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://api.finalround.gg/themes/images/team-imt.png" alt="Immortals" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://api.finalround.gg/themes/images/team-og.png" alt="Optic Gaming" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://api.finalround.gg/themes/images/team-p1.png" alt="Pheonix1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <iframe width="820" height="465" frameBorder="3" allowFullScreen loop="1"
              src="https://www.youtube.com/embed/vccdrVAAs3o?autoplay=1&controls=1&showinfo=0&autohide=1&mute=1&frameborder=0&loop=1">
            </iframe>

          </section>
        

        </div>
      </Fragment>
    );
  }
}

export default Login;