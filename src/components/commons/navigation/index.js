import React from 'react';
import PropTypes from 'prop-types';

import UserNavigation from './UserNavigation';
import AdminNavigation from './AdminNavigation';

const Navigation = props => {
  const { isAuthenticated } = props;

  return (
    <div className="navbar-container">
      {isAuthenticated ? (
        <AdminNavigation {...props} />
      ) : (
        <UserNavigation {...props} />
      )}
    </div>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default Navigation;
