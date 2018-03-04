import React from 'react';
import PropTypes from 'prop-types';

import UserNavigation from './UserNavigation';
import AdminNavigation from './AdminNavigation';

const Navigation = props => {
  const { isAuthenticated } = props;

  return isAuthenticated ? (
    <AdminNavigation {...props} />
  ) : (
    <UserNavigation {...props} />
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default Navigation;
