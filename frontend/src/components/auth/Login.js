import React from 'react';

import logo from '../../../public/assets/images/sports-logo.png';

const Login = (props) => {
  return (
    <div className="login-outer-container">
      <div className="login-inner-container">
        <div className="login-header">
          <a href="#">
            <img src={logo} alt="Sports logo" />
          </a>
        </div>
        <form className="login-form">
          <div className="input-group">
            <input type="email" placeholder="EMAIL" name="email" required={true} />
            <input type="password" placeholder="PASSWORD" name="password" required={true} />
          </div>
          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
