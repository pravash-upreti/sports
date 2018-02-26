import React from 'react';
import { Redirect } from 'react-router';
import { compose, branch, withState, withHandlers } from 'recompose';

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
    handleEmailChange,
    shouldShowLoginError,
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
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              required
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              name="password"
              required
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
  withState('shouldShowLoginError', 'setShouldShowLoginError', false),
  withState('errorMessage', 'setErrorMessage', DEFAULT_LOGIN_ERROR_MESSAGE),
  withHandlers({
    handleEmailChange: ({ setEmail }) => e => setEmail(e.target.value),
    handlePasswordChange: ({ setPassword }) => e => setPassword(e.target.value),
    handleLogin: ({
      email,
      password,
      setAuthentication,
      setErrorMessage,
      setShouldShowLoginError
    }) => e => {
      e.preventDefault();
      login({ email, password })
        .then(loginResponse => {
          if (loginResponse && loginResponse.tokens) {
            const res = setAuthentication(true);
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
          const errorMessage = error && error.error && error.error.message;
          setShouldShowLoginError(true);
          if (errorMessage) {
            setErrorMessage(errorMessage);

            return;
          }

          setErrorMessage(DEFAULT_LOGIN_ERROR_MESSAGE);
        });
    }
  }),
  redirectIfAuthenticated
)(Login);
