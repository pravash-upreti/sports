import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { BASE_ROUTES } from '../constants/routes';

import Chess from './chess';
import Header from './header';
import Footer from './footer';
import Futsal from './futsal';
// import Dashboard from './dashboard';
import CarromBoard from './carrom-board';
import TableTennis from './table-tennis';

// Top level application router.
const AppRouter = props => (
  <Fragment>
    <div className="main-wrapper">
      <Header pageTitle={props.pageTitle} />
      <Switch>
        <Route path={BASE_ROUTES.CHESS} render={() => <Chess handleChangePageTitle={props.handleChangePageTitle} />} />
        <Route
          path={BASE_ROUTES.FUTSAL}
          render={() => <Futsal handleChangePageTitle={props.handleChangePageTitle} />}
        />
        <Route
          path={BASE_ROUTES.CARROM_BOARD}
          render={routeProps => (
            <CarromBoard routeProps={routeProps} handleChangePageTitle={props.handleChangePageTitle} />
          )}
        />
        <Route
          path={BASE_ROUTES.TABLE_TENNIS}
          render={() => <TableTennis handleChangePageTitle={props.handleChangePageTitle} />}
        />
        {/* TODO: Update Dashboard <Route exact path={BASE_ROUTES.HOME} component={CarromBoard} /> */}
        <Redirect to={BASE_ROUTES.CARROM_BOARD} />
      </Switch>
    </div>
    <Footer />
  </Fragment>
);

AppRouter.propTypes = {
  pageTitle: PropTypes.object,
  handleChangePageTitle: PropTypes.func
};

export default AppRouter;
