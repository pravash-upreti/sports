import React from 'react';
import { Router, Route, Switch } from 'react-router';

import Login from './auth';
import Tree from './tournament/tree';
import User from './tournament/fixtureOverview';

import * as routes from '../constants/routes';

import history from '../utils/routerHistory';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={routes.ROOT} component={User} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.TOURNAMENT_TREE} component={Tree} />
      </Switch>
    </Router>
  );
};

export default Routes;
