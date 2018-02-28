import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import logo from '../../../public/assets/images/sports-logo.png';

import { LOCAL_AUTH_VARIABLE } from '../../constants/constants';
import { DEFAULT_LOGIN_ERROR_MESSAGE } from '../../constants/errorMessages';

import { setTokenInHeader } from '../../utils/axiosInstance';

import login from '../../services/authServices/login';

import redirectIfAuthenticated from '../hocs/redirectIfAuthenticated';

const Login = props => {
  const {
    handleLogin,
    errorMessage,
    loginDetails,
    showLoginError,
    handleInputChange
  } = props;

  return (
    <div className="login-outer-container">
      <div className="login-inner-container">
        <div className="login-header">
          <a href="/">
            <img src={logo} alt="Sports logo" />
          </a>
        </div>
        {showLoginError ? <p className="login-error">{errorMessage}</p> : null}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              required
              type="email"
              name="email"
              placeholder="EMAIL"
              value={loginDetails.email}
              onChange={handleInputChange}
            />
            <input
              required
              type="password"
              name="password"
              placeholder="PASSWORD"
              onChange={handleInputChange}
              value={loginDetails.password}
            />
          </div>
          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  showLoginError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  loginDetails: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired
};

export default compose(
  withState('showLoginError', 'setShowLoginError', false),
  withState('loginDetails', 'setLoginDetails', { email: '', password: '' }),
  withState('errorMessage', 'setErrorMessage', DEFAULT_LOGIN_ERROR_MESSAGE),
  withHandlers({
    handleInputChange: ({ setLoginDetails, loginDetails }) => e => {
      const { name, value } = e.target;
      const loginInfo = { ...loginDetails };

      loginInfo[name] = value;

      setLoginDetails(loginInfo);
    },
    handleLogin: ({
      loginDetails,
      setErrorMessage,
      setAuthentication,
      setShowLoginError
    }) => async e => {
      e.preventDefault();
      try {
        const response = await login(loginDetails);

        if (response && response.tokens) {
          setAuthentication(true);
          localStorage.setItem(
            LOCAL_AUTH_VARIABLE,
            JSON.stringify({
              isAuthenticated: true,
              refreshToken: response.tokens.refreshToken
            })
          );
          setTokenInHeader(response.tokens.accessToken);

          return;
        }

        throw DEFAULT_LOGIN_ERROR_MESSAGE;
      } catch (error) {
        const errorMessage =
          (error && error.error && error.error.message) ||
          DEFAULT_LOGIN_ERROR_MESSAGE;

        setShowLoginError(true);
        setErrorMessage(errorMessage);
      }
    }
  }),
  redirectIfAuthenticated
)(Login);
