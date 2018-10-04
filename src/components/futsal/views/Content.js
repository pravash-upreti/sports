import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { FUTSAL_ROUTES } from '../../../constants/routes';

import Stats from './stats';
import Points from './points';
import SubHeader from './SubHeader';
import { Home, Teams, Results, Fixtures } from '../../common/contents';

const Content = props => {
  return (
    <div>
      <SubHeader />
      <Switch>
        <Route path={FUTSAL_ROUTES.HOME} render={() => <Home data={props.data.recents} />} />
        <Route path={FUTSAL_ROUTES.TEAMS} render={() => <Teams data={props.data.teams} />} />
        <Route path={FUTSAL_ROUTES.RESULTS} render={() => <Results data={props.data.results} />} />
        <Route path={FUTSAL_ROUTES.FIXTURES} render={() => <Fixtures data={props.data.fixtures} />} />
        <Route path={FUTSAL_ROUTES.POINTS} render={() => <Points data={props.data.pointsTable} />} />
        <Route path={FUTSAL_ROUTES.STATS} render={() => <Stats data={props.data.stats} />} />
        <Redirect to={FUTSAL_ROUTES.HOME} />
      </Switch>
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.object
};

export default Content;
