import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { BASE_ROUTES } from '../constants/routes';

import Chess from './chess';
import Header from './header';
import Footer from './footer';
import Futsal from './futsal';
// import Dashboard from './dashboard';
import CarromBoard from './carrom-board';
import TableTennis from './table-tennis';

// Top level application router.
const Router = () => (
  <BrowserRouter>
    <Fragment>
      <div className="main-wrapper">
        <Header />
        <Switch>
          <Route path={BASE_ROUTES.CHESS} component={Chess} />
          <Route path={BASE_ROUTES.FUTSAL} component={Futsal} />
          <Route path={BASE_ROUTES.CARROM_BOARD} component={CarromBoard} />
          <Route path={BASE_ROUTES.TABLE_TENNIS} component={TableTennis} />
          {/* TODO: Update Dashboard <Route exact path={BASE_ROUTES.HOME} component={CarromBoard} /> */}
          <Redirect to={BASE_ROUTES.CARROM_BOARD} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Router;
