import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import * as routes from '../constants/routes';

import Chess from './chess';
import Header from './header';
import Futsal from './futsal';
import Dashboard from './dashboard';

// Top level application router.
const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path={routes.CHESS} component={Chess} />
          <Route exact path={routes.FUTSAL} component={Futsal} />
          <Route exact path={routes.HOME} component={Dashboard} />
          <Redirect to={routes.HOME} />
        </Switch>
      </div>
    </Fragment>
  </BrowserRouter>
);

export default Router;
