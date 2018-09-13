import React from 'react';
import { Route } from 'react-router-dom';

import { CARROM_BOARD_ROUTES } from '../../../constants/routes';

import Teams from './Teams';
import Recent from './Recent';
import Results from './Results';
import Fixtures from './Fixtures';
import SubHeader from './SubHeader';

const Content = props => (
  <div>
    <SubHeader />
    <div className="tournament-content">
      <div className="container">
        <Route path={CARROM_BOARD_ROUTES.HOME} component={Recent} />
        <Route path={CARROM_BOARD_ROUTES.TEAMS} component={Teams} />
        <Route path={CARROM_BOARD_ROUTES.RESULTS} component={Results} />
        <Route path={CARROM_BOARD_ROUTES.FIXTURES} component={Fixtures} />
      </div>
    </div>
  </div>
);

export default Content;
