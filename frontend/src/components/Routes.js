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
    showToaster,
    hideToaster,
    handleLogout,
    toasterMessage,
    isAuthenticated,
    shouldShowToaster,
    setAuthentication
  } = props;

  return (
    <Router history={history}>
      <Fragment>
        {shouldShowToaster ? (
          <Toaster message={toasterMessage} hideToaster={hideToaster} />
        ) : null}
        <Navigation isAuthenticated={isAuthenticated} logout={handleLogout} />
        <Switch>
          <Route exact path={routes.ROOT} component={Tree} />
          <Route
            exact
            path={routes.LOGIN}
            render={routerProps => (
              <Login
                {...routerProps}
                isAuthenticated={isAuthenticated}
                setAuthentication={setAuthentication}
                showToaster={showToaster}
              />
            )}
          />
          <Route exact path={routes.TOURNAMENT_TREE} component={Tree} />
          <Route
            exact
            path={routes.TOURNAMENT_FIXTURE_OVERVIEW}
            component={FixtureOverview}
          />
          <PrivateRoute
            Component={Test}
            showToaster={showToaster}
            isAuthenticated={isAuthenticated}
            path={routes.ADMIN}
          />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default compose(
  withState(
    'isAuthenticated',
    'setAuthentication',
    authDetails.isAuthenticated
  ),
  withState('shouldShowToaster', 'setShouldShowToaster', false),
  withState('toasterMessage', 'setToasterMessage', DEFAULT_TOASTER_MESSAGE),
  withProps(
    ({ setAuthentication, setToasterMessage, setShouldShowToaster }) => ({
      localLogout: () => {
        setAuthentication(false);
        localStorage.removeItem(LOCAL_AUTH_VARIABLE);
      },
      showToaster: message => {
        setShouldShowToaster(true);
        setToasterMessage(message);
      },
      hideToaster: () => {
        setShouldShowToaster(false);
        setToasterMessage(DEFAULT_TOASTER_MESSAGE);
      }
    })
  ),
  withHandlers({
    handleLogout: ({ localLogout, showToaster }) => e => {
      logout()
        .then(response => {
          localLogout();
        })
        .catch(error => {
          const errorMessage = error && error.error && error.error.message;

          if (errorMessage) {
            showToaster(errorMessage);

            return;
          }

          showToaster(DEFAULT_LOGOUT_ERROR_MESSAGE);
        });
    },
    getAuthenticationStatus: ({ isAuthenticated }) => e => isAuthenticated
  }),
  lifecycle({
    componentDidMount() {
      addInterceptor(
        this.props.localLogout,
        this.props.getAuthenticationStatus
      );
    }
  })
)(Routes);
