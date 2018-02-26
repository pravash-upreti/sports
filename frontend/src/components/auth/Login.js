import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import logo from '../../../public/assets/images/sports-logo.png';

import { LOCAL_AUTH_VARIABLE } from '../../constants/constants';
import { DEFAULT_LOGIN_ERROR_MESSAGE } from '../../constants/errorMessages';

import { setTokenInHeader } from '../../utils/axios';

import login from '../../services/authServices/login';

import redirectIfAuthenticated from '../hocs/redirectIfAuthenticated';

const Login = props => {
  const {
    handleLogin,
    errorMessage,
    showLoginError,
    handleEmailChange,
    handlePasswordChange
  } = props;

  return (
    <div className="login-outer-container">
      <div className="login-inner-container">
        <div className="login-header">
          <a href="/">
            <img src={logo} alt="Sports logo" />
          </a>
        </div>
        {props.showLoginError ? (
          <p className="login-error">{props.errorMessage}</p>
        ) : null}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              required
              type="email"
              name="email"
              placeholder="EMAIL"
              onChange={handleEmailChange}
            />
            <input
              required
              type="password"
              name="password"
              placeholder="PASSWORD"
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

export default compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('showLoginError', 'setShowLoginError', false),
  withState('errorMessage', 'setErrorMessage', DEFAULT_LOGIN_ERROR_MESSAGE),
  withHandlers({
    handleEmailChange: ({ setEmail }) => e => setEmail(e.target.value),
    handlePasswordChange: ({ setPassword }) => e => setPassword(e.target.value),
    handleLogin: ({
      email,
      password,
      setErrorMessage,
      setAuthentication,
      setShowLoginError
    }) => e => {
      e.preventDefault();
      login({ email, password })
        .then(loginResponse => {
          if (loginResponse && loginResponse.tokens) {
            setAuthentication(true);
            localStorage.setItem(
              LOCAL_AUTH_VARIABLE,
              JSON.stringify({
                isAuthenticated: true,
                refreshToken: loginResponse.tokens.refreshToken
              })
            );
            setTokenInHeader(loginResponse.tokens.accessToken);

            return;
          }
          throw DEFAULT_LOGIN_ERROR_MESSAGE;
        })
        .catch(error => {
          const errorMessage =
            (error && error.error && error.error.message) ||
            DEFAULT_LOGIN_ERROR_MESSAGE;

          setShowLoginError(true);
          setErrorMessage(errorMessage);
        });
    }
  }),
  redirectIfAuthenticated
)(Login);
