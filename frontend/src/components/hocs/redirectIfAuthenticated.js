import React from 'react';
import { Redirect } from 'react-router';
import { branch, renderComponent } from 'recompose';

const checkAuthentication = ({ isAuthenticated }) => isAuthenticated;

const RedirectHere = ({ location, isAuthenticated }) => {
  const newRoute = (location.state && location.state.from) || { pathname: '/' };

  return <Redirect to={newRoute} />;
};
const redirectIfAuthenticated = branch(
  checkAuthentication,
  renderComponent(RedirectHere)
);

export default redirectIfAuthenticated;
