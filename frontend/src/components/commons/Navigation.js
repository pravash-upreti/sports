import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

const Navigation = props => {
  const { logout, isAuthenticated } = props;

  return (
    <div>
      <Link to={routes.ROOT}>Home</Link>
      <Link to={routes.ADMIN}>Admin</Link>
      <Link to={routes.FIXTURE_OVERVIEW}>FixtureOverview</Link>
      {isAuthenticated ? (
        <Link onClick={logout} to="/logout">
          Logout
        </Link>
      ) : null}
    </div>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default Navigation;
