import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import * as routes from '../constants/routes';

import Chess from './chess';
import Header from './header';
import Futsal from './futsal';
import Dashboard from './dashboard';
import CaromBoard from './carom-board';
import TableTennis from './table-tennis';

// Top level application router.
const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Header />

      <Switch>
        <Route exact path={routes.CHESS} component={Chess} />
        <Route exact path={routes.FUTSAL} component={Futsal} />
        <Route exact path={routes.HOME} component={Dashboard} />
        <Route exact path={routes.CAROM_BOARD} component={CaromBoard} />
        <Route exact path={routes.TABLE_TENNIS} component={TableTennis} />
        <Redirect to={routes.HOME} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Router;
