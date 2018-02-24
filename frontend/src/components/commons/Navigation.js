import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <div>
      <Link to="/admin">Admin</Link>
      {
        props.isAuthenticated ? (
          <Link onClick={props.logout} to="/logout">Logout</Link>
        ) : (
          null
        )
      }
    </div>
  );
};

export default Navigation;
