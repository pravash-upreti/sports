import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, Switch, Redirect } from 'react-router';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';

import * as routes from '../constants/routes';

import history from '../utils/routerHistory';
import { addInterceptor } from '../utils/axios';

import logout from '../services/authServices/logout';

import Login from './auth';
import Test from './admin/Test';
import Tree from './tournament/tree';
import Navigation from './commons/Navigation';
import FixtureOverview from './tournament/fixtureOverview';


let sportSessionDetails;

if (localStorage.sportSessionDetails) {
  sportSessionDetails = JSON.parse(localStorage.sportSessionDetails);
} else {
  sportSessionDetails = {
    isAuthenticated: false,
    refreshToken: ''
  };
};

const Routes = (props) => {
  return (
    <Router history={history}>
      <Fragment>
        <Navigation isAuthenticated={props.isAuthenticated} logout={props.handleLogout} />
        <Route exact path={routes.LOGIN} render={(routerProps) =>
          <Login
            {...routerProps}
            isAuthenticated={props.isAuthenticated}
            setAuthentication={props.setAuthentication}
          />
        } />
        <Route exact path={routes.TOURNAMENT_TREE} component={Tree} />
        <Route exact path={routes.TOURNAMENT_FIXTURE_OVERVIEW} component={FixtureOverview} />
        <Route
          path={routes.ADMIN}
          render={(routerProps) => {
            return (
              props.isAuthenticated ? (
                <Test />
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
  withState('isAuthenticated', 'setAuthentication', sportSessionDetails.isAuthenticated),
  withProps((props) => {
    return {
      localLogout: () => {
        props.setAuthentication(false);
        localStorage.removeItem('sportSessionDetails');
      }     
    };
  }),
  withHandlers({
    handleLogout: (props) => (e) => {
      logout()
      .then((response) => {
        props.localLogout();
      });
    },
    getAuthenticationStatus: (props) => (e) => {
      return props.isAuthenticated;
    }
  }),
  lifecycle({
    componentDidMount() {
      addInterceptor(this.props.localLogout, this.props.getAuthenticationStatus);
    }
  })
)(Routes);
