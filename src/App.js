import React, { Component } from 'react';
import logo from './cookie.png';
import './App.css';

class App extends Component {
  constructor(props, context) {
    // constructor is what you want to set in the beginning (aka new Dog())
    super(props, context);
    this.state = {
      cookies: 0
    };
  }

  countCookies() {
    // this.state.cookies=this.state.cookies+1;
    this.setState({
      cookies: this.state.cookies + 1
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.countCookies.bind(this)}/>
          <p>
            You have clicked on the cookie {this.state.cookies} times.
          </p>
          <a
            className="App-link"
            href="http://orteil.dashnet.org/cookieclicker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Real cookie clicker
          </a>
        </header>
      </div>
    );
  }
}

export default App;
