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

      <Switch>
        <Route exact path={routes.CHESS} component={Chess} />
        <Route exact path={routes.FUTSAL} component={Futsal} />
        <Route exact path={routes.HOME} component={Dashboard} />
        {/* <Route from="*" to={routes.HOME} component={Dashboard}/>*/}
        <Redirect to={routes.HOME} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Router;
