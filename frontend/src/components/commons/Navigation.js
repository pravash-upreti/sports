import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

const Navigation = (props) => {
  return (
    <div>
      <Link to={routes.ADMIN}>Admin</Link>
      <Link to={routes.TOURNAMENT_FIXTURE_OVERVIEW}>FixtureOverview</Link>
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
