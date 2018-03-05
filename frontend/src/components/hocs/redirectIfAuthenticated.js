import React from 'react';
import PropsTypes from 'prop-types';
import { Redirect } from 'react-router';
import { branch, renderComponent } from 'recompose';

import { ADMIN_TOURNAMENTS } from '../../constants/routes';

const checkAuthentication = ({ isAuthenticated }) => isAuthenticated;

const RedirectHere = ({ location }) => {
  const newRoute = (location && location.state && location.state.from) || {
    pathname: ADMIN_TOURNAMENTS
  };

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
