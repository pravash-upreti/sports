import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router';
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
  withProps
} from 'recompose';

import * as routes from '../constants/routes';
import { LOCAL_AUTH_VARIABLE } from '../constants/constants';
import {
  DEFAULT_TOASTER_MESSAGE,
  DEFAULT_LOGOUT_ERROR_MESSAGE
} from '../constants/errorMessages';

import history from '../utils/routerHistory';
import { addInterceptor } from '../utils/axios';
import getAuthDetails from '../utils/getAuthDetails';

import logout from '../services/authServices/logout';

import PrivateRoute from './hocs/PrivateRoute';

import Login from './auth';
import Test from './admin/Test';
import Tree from './tournament/tree';
import Toaster from './commons/Toaster';
import Navigation from './commons/Navigation';
import FixtureOverview from './tournament/fixtureOverview';

const authDetails = getAuthDetails();

const Routes = props => {
  const {
    hideToaster,
    showToaster,
    handleLogout,
    toasterMessage,
    displayToaster,
    isAuthenticated,
    setAuthentication
  } = props;

  return (
    <Router history={history}>
      <Fragment>
        {showToaster ? (
          <Toaster message={toasterMessage} hideToaster={hideToaster} />
        ) : null}
        <Switch>
          <Route
            exact
            path={routes.LOGIN}
            render={routerProps => (
              <Login
                {...routerProps}
                displayToaster={displayToaster}
                isAuthenticated={isAuthenticated}
                setAuthentication={setAuthentication}
              />
            )}
          />
          <Navigation isAuthenticated={isAuthenticated} logout={handleLogout} />
        </Switch>
        <Switch>
          <Route exact path={routes.ROOT} component={Tree} />
          <Route exact path={routes.TOURNAMENT_TREE} component={Tree} />
          <Route
            exact
            path={routes.TOURNAMENT_FIXTURE_OVERVIEW}
            component={FixtureOverview}
          />
          <PrivateRoute
            Component={Test}
            path={routes.ADMIN}
            displayToaster={displayToaster}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default compose(
  withState('isAuthenticated', 'setAuthentication', false),
  withState('showToaster', 'setShowToaster', false),
  withState('toasterMessage', 'setToasterMessage', DEFAULT_TOASTER_MESSAGE),
  withProps(({ setAuthentication, setToasterMessage, setShowToaster }) => ({
    localLogout: () => {
      setAuthentication(false);
      localStorage.removeItem(LOCAL_AUTH_VARIABLE);
    },
    displayToaster: message => {
      setShowToaster(true);
      setToasterMessage(message);
    },
    hideToaster: () => {
      setShowToaster(false);
      setToasterMessage(DEFAULT_TOASTER_MESSAGE);
    }
  })),
  withHandlers({
    handleLogout: ({ localLogout, displayToaster }) => () => {
      logout()
        .then(response => {
          localLogout();
        })
        .catch(error => {
          const errorMessage =
            (error && error.error && error.error.message) ||
            DEFAULT_LOGOUT_ERROR_MESSAGE;

          displayToaster(errorMessage);
        });
    },
    getAuthenticationStatus: ({ isAuthenticated }) => () => isAuthenticated
  }),
  lifecycle({
    componentWillMount() {
      this.props.setAuthentication(
        Boolean(authDetails && authDetails.isAuthenticated)
      );
    },
    componentDidMount() {
      addInterceptor(
        this.props.localLogout,
        this.props.getAuthenticationStatus
      );
    }
  })
)(Routes);
