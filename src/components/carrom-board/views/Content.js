import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { CARROM_BOARD_ROUTES } from '../../../constants/routes';

import Teams from './Teams';
import Recent from './Recent';
import Results from './Results';
import Fixtures from './Fixtures';
import SubHeader from './SubHeader';

const Content = () => {
  return (
    <div>
      <SubHeader />
      <div className="tournament-content">
        <div className="container">
          <Switch>
            <Route path={CARROM_BOARD_ROUTES.HOME} component={Recent} />
            <Route path={CARROM_BOARD_ROUTES.TEAMS} component={Teams} />
            <Route path={CARROM_BOARD_ROUTES.RESULTS} component={Results} />
            <Route path={CARROM_BOARD_ROUTES.FIXTURES} component={Fixtures} />
            <Redirect to={CARROM_BOARD_ROUTES.HOME} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Content;
