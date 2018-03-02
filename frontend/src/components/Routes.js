import PropTypes from 'prop-types';
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
import getAuthDetails from '../utils/getAuthDetails';
import { addInterceptor } from '../utils/axiosInstance';

import logout from '../services/authServices/logout';

import PrivateRoute from './hocs/PrivateRoute';

import Login from './auth';
import Admin from './admin';
import Tree from './tournament/tree';
import Toaster from './commons/Toaster';
import Navigation from './commons/Navigation';
import FixtureOverview from './tournament/fixtureOverview';

const Routes = props => {
  const {
    showToaster,
    handleLogout,
    closeToaster,
    setShowToaster,
    toasterMessage,
    isAuthenticated,
    setToasterMessage,
    setAuthentication
  } = props;

  return (
    <Router history={history}>
      <Fragment>
        {showToaster ? (
          <Toaster message={toasterMessage} closeToaster={closeToaster} />
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
            path={routes.FIXTURE_OVERVIEW}
          />
          <PrivateRoute
            Component={Admin}
            path={routes.ADMIN}
            setShowToaster={setShowToaster}
            isAuthenticated={isAuthenticated}
            setToasterMessage={setToasterMessage}
          />
        </Switch>
      </Fragment>
    </Router>
  );
};

Routes.propTypes = {
  showToaster: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  closeToaster: PropTypes.func.isRequired,
  setShowToaster: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  toasterMessage: PropTypes.string.isRequired,
  setAuthentication: PropTypes.func.isRequired,
  setToasterMessage: PropTypes.func.isRequired
};

export default compose(
  withState('showToaster', 'setShowToaster', false),
  withState('isAuthenticated', 'setAuthentication', false),
  withState('toasterMessage', 'setToasterMessage', DEFAULT_TOASTER_MESSAGE),
  withHandlers({
    localLogout: ({ setAuthentication }) => () => {
      setAuthentication(false);
      localStorage.removeItem(LOCAL_AUTH_VARIABLE);
    }
  }),
  withHandlers({
    handleLogout: ({
      localLogout,
      setShowToaster,
      setToasterMessage
    }) => async () => {
      try {
        await logout();
        localLogout();
      } catch (error) {
        const errorMessage =
          (error && error.error && error.error.message) ||
          DEFAULT_LOGOUT_ERROR_MESSAGE;

        setShowToaster(true);
        setToasterMessage(errorMessage);
      }
    },
    closeToaster: ({ setShowToaster }) => () => {
      setShowToaster(false);
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
