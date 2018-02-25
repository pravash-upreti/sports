import React from 'react';
import { Router, Route, Switch } from 'react-router';

import * as routes from '../constants/routes';

import Admin from './admin';
import Login from './auth';
import Tree from './tournament/tree';
import FixtureOverview from './tournament/fixtureOverview';

import history from '../utils/routerHistory';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={routes.ADMIN} component={Admin} />
      <Route exact path={routes.LOGIN} component={Login} />
      <Route exact path={routes.TOURNAMENT_TREE} component={Tree} />
      <Route
        exact
        path={routes.TOURNAMENT_FIXTURE_OVERVIEW}
        component={FixtureOverview}
      />
    </Switch>
  </Router>
);

export default Routes;
