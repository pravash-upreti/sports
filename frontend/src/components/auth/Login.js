import React from "react";

import logo from "../../../public/assets/images/sports-logo.png";

const Login = props => (
  <div className="login-outer-container">
    <div className="login-inner-container">
      <div className="login-header">
        <a href="#">
          <img src={logo} alt="Sports logo" />
        </a>
      </div>
      <form className="login-form">
        <div className="input-group">
          <input type="email" placeholder="EMAIL" name="email" required />
          <input
            type="password"
            placeholder="PASSWORD"
            name="password"
            required
          />
        </div>
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  </div>
);

export default Login;
