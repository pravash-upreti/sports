import React from 'react';
import { Router, Route, Switch } from 'react-router';

import HomePage from './user/HomePage';
import LoginPage from './auth/LoginPage';

import * as routes from '../constant/routes';

import history from '../util/routerHistory';

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={routes.ROOT} component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route exact path={routes.LOGIN} component={LoginPage} />          
        </Switch>
      </Router>
    );
  }
};

export default Routes;
