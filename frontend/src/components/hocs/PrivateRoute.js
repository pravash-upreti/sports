import React from 'react';
import { Route, Redirect } from 'react-router';

import * as routes from '../../constants/routes';

const PrivateRoute = props => {
  const { path, Component, isAuthenticated, ...otherProps } = props;

  return (
    <Route
      path={path}
      render={routerProps =>
        isAuthenticated ? (
          <Component {...otherProps} />
        ) : (
          <Redirect
            to={{
              pathname: routes.LOGIN,
              state: {
                from: routerProps.location
              }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
