import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router';
import { compose, withState, lifecycle, withHandlers } from 'recompose';

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

const Routes = props => {
  const {
    showToaster,
    handleLogout,
    toasterMessage,
    isAuthenticated,
    setAuthentication,
    toggleShowToaster
  } = props;

  return (
    <Router history={history}>
      <Fragment>
        {showToaster ? (
          <Toaster
            message={toasterMessage}
            toggleShowToaster={toggleShowToaster}
          />
        ) : null}
        <Switch>
          <Route
            exact
            path={routes.LOGIN}
            render={routerProps => (
              <Login
                {...routerProps}
                isAuthenticated={isAuthenticated}
                setAuthentication={setAuthentication}
              />
            )}
          />
          <Navigation logout={handleLogout} isAuthenticated={isAuthenticated} />
        </Switch>
        <Switch>
          <Route exact component={Tree} path={routes.ROOT} />
          <Route exact component={Tree} path={routes.TOURNAMENT_TREE} />
          <Route
            exact
            component={FixtureOverview}
            path={routes.TOURNAMENT_FIXTURE_OVERVIEW}
          />
          <PrivateRoute
            Component={Test}
            path={routes.ADMIN}
            isAuthenticated={isAuthenticated}
            toggleShowToaster={toggleShowToaster}
          />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default compose(
  withState('showToaster', 'setShowToaster', false),
  withState('isAuthenticated', 'setAuthentication', false),
  withState('toasterMessage', 'setToasterMessage', DEFAULT_TOASTER_MESSAGE),
  withHandlers({
    localLogout: ({ setAuthentication }) => () => {
      setAuthentication(false);
      localStorage.removeItem(LOCAL_AUTH_VARIABLE);
    },
    toggleShowToaster: ({
      showToaster,
      setShowToaster,
      setToasterMessage
    }) => message => {
      setShowToaster(!showToaster);
      setToasterMessage(message || DEFAULT_TOASTER_MESSAGE);
    }
  }),
  withHandlers({
    handleLogout: ({ localLogout, toggleShowToaster }) => () => {
      logout()
        .then(response => {
          localLogout();
        })
        .catch(error => {
          const errorMessage =
            (error && error.error && error.error.message) ||
            DEFAULT_LOGOUT_ERROR_MESSAGE;

          toggleShowToaster(errorMessage);
        });
    },
    getAuthenticationStatus: ({ isAuthenticated }) => () => isAuthenticated
  }),
  lifecycle({
    componentWillMount() {
      const authDetails = getAuthDetails();

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
