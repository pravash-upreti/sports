import React from 'react';
import PropsTypes from 'prop-types';
import { Redirect } from 'react-router';
import { branch, renderComponent } from 'recompose';

const checkAuthentication = ({ isAuthenticated }) => isAuthenticated;

const RedirectHere = ({ location }) => {
  const newRoute = (location.state && location.state.from) || { pathname: '/' };

  return <Redirect to={newRoute} />;
};

RedirectHere.propTypes = {
  location: PropsTypes.object
};

const redirectIfAuthenticated = branch(
  checkAuthentication,
  renderComponent(RedirectHere)
);

export default redirectIfAuthenticated;
