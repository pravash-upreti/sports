import React from 'react';
import { Router, Route, Switch } from 'react-router';

import HomePage from './user/HomePage';
import LoginPage from './auth/LoginPage';

import * as routes from '../constants/routes';

import history from '../utils/routerHistory';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={routes.ROOT} component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path={routes.LOGIN} component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
