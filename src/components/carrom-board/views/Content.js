import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { CARROM_BOARD_ROUTES } from '../../../constants/routes';

import Teams from './Teams';
import Recent from './Recent';
import Results from './Results';
import Fixtures from './Fixtures';
import SubHeader from './SubHeader';

const Content = props => {
  return (
    <div>
      <SubHeader />
      <Switch>
        <Route path={CARROM_BOARD_ROUTES.HOME} render={() => <Recent data={props.data.recent} />} />
        <Route path={CARROM_BOARD_ROUTES.TEAMS} render={() => <Teams data={props.data.teams} />} />
        <Route path={CARROM_BOARD_ROUTES.RESULTS} render={() => <Results data={props.data.results} />} />
        <Route path={CARROM_BOARD_ROUTES.FIXTURES} render={() => <Fixtures data={props.data.fixtures} />} />
        <Redirect to={CARROM_BOARD_ROUTES.HOME} render={() => <Recent data={props.data.recent} />} />
      </Switch>
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.object
};

export default Content;
