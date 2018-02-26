import React from 'react';
import { Route, Redirect } from 'react-router';

import * as routes from '../../constants/routes';

const RedirectIfNotAuthenticated = (props) => {
  const { path, Component, showToaster, isAuthenticated } = props;

  return (
    <Route
      path={path}
      render={(routerProps) => {
        return (
          isAuthenticated ? (
            <Component showToaster={showToaster} />
          ) : (
              <Redirect to={{
                pathname: routes.LOGIN,
                state: {
                  from: routerProps.location
                }
              }}
              />
            )
        )
      }}
    />
  )
};

export default RedirectIfNotAuthenticated;
