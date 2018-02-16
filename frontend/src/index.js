import { render } from 'react-dom';
import React, { Component } from 'react';

import '../public/assets/css/style.css';
import './assets/sass/style.scss';

import logo from '../public/assets/images/sports-logo.png';

export default class Hello extends Component {
  render() {
    return (
      <div className="login-outer-container">
        <div className="login-inner-container">
          <div className="login-header">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <form className="login-form">
            <div className="input-group">
              <input type="email" placeholder="EMAIL" name="email" required={true} />
              <input type="password" placeholder="PASSWORD" name="psw" required={true} />
            </div>
            <button type="submit">SIGN IN</button>
          </form>
        </div>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
