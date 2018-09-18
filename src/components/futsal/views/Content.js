import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { FUTSAL_ROUTES } from '../../../constants/routes';

import SubHeader from './SubHeader';
import { Teams, Recent, Results, Fixtures } from '../../common/contents';

const Content = props => {
  return (
    <div>
      <SubHeader />
      <div className="container">
        <Switch>
          <Route path={FUTSAL_ROUTES.HOME} render={() => <Recent data={props.data.recents} />} />
          <Route path={FUTSAL_ROUTES.TEAMS} render={() => <Teams data={props.data.teams} />} />
          <Route path={FUTSAL_ROUTES.RESULTS} render={() => <Results data={props.data.results} />} />
          <Route path={FUTSAL_ROUTES.FIXTURES} render={() => <Fixtures data={props.data.fixtures} />} />
          <Redirect to={FUTSAL_ROUTES.HOME} render={() => <Recent data={props.data.recents} />} />
        </Switch>
      </div>
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.object
};

export default Content;
