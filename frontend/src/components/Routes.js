import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, Switch, Redirect } from 'react-router';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';

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


import Login from './auth';
import Test from './admin/Test';
import Tree from './tournament/tree';
import Toaster from './commons/Toaster';
import Navigation from './commons/Navigation';
import FixtureOverview from './tournament/fixtureOverview';

let authDetails = getAuthDetails();


const Routes = (props) => {
  return (
    <Router history={history}>
      <Fragment>
        {
          props.shouldShowToaster ? (
            <Toaster message={props.toasterMessage} hideToaster={props.hideToaster} />
          ) : (
              null
            )
        }
        <Navigation isAuthenticated={props.isAuthenticated} logout={props.handleLogout} />
        <Route exact path={routes.LOGIN} render={(routerProps) =>
          <Login
            {...routerProps}
            isAuthenticated={props.isAuthenticated}
            setAuthentication={props.setAuthentication}
            showToaster={props.showToaster}
          />
        } />
        <Route exact path={routes.TOURNAMENT_TREE} component={Tree} />
        <Route exact path={routes.TOURNAMENT_FIXTURE_OVERVIEW} component={FixtureOverview} />
        <Route
          path={routes.ADMIN}
          render={(routerProps) => {
            return (
              props.isAuthenticated ? (
                <Test showToaster={props.showToaster} />
              ) : (
                  <Redirect to={{
                    pathname: routes.LOGIN,
                    state: {
                      from: routerProps.location
                    }
                  }}
                  />
                )
            )
          }}
        />
      </Fragment>
    </Router>
  );
};

export default compose(
  withState('isAuthenticated', 'setAuthentication', authDetails.isAuthenticated),
  withState('shouldShowToaster', 'setShouldShowToaster', false),
  withState('toasterMessage', 'setToasterMessage', DEFAULT_TOASTER_MESSAGE),
  withProps((props) => {
    return {
      localLogout: () => {
        props.setAuthentication(false);
        localStorage.removeItem(LOCAL_AUTH_VARIABLE);
      },
      showToaster: (message) => {
        props.setShouldShowToaster(true);
        props.setToasterMessage(message);
      },
      hideToaster: () => {
        props.setShouldShowToaster(false);
        props.setToasterMessage(DEFAULT_TOASTER_MESSAGE);
      },
    };
  }),
  withHandlers({
    handleLogout: ({ localLogout, showToaster }) => (e) => {
      logout()
        .then((response) => {
          localLogout();
        })
        .catch((error) => {
          const errorMessage = error && error.error && error.error.message;

          if (errorMessage) {
            showToaster(errorMessage);

            return;
          }

          showToaster(DEFAULT_LOGOUT_ERROR_MESSAGE);
        });
    },
    getAuthenticationStatus: ({ isAuthenticated }) => (e) => {
      return isAuthenticated;
    },
  }),
  lifecycle({
    componentDidMount() {
      addInterceptor(this.props.localLogout, this.props.getAuthenticationStatus);
    }
  })
)(Routes);
