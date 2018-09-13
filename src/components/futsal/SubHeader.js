import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';

import { FUTSAL_ROUTES } from '../../constants/routes';

import Stats from './views/Stats';
import Teams from './views/Teams';
import Points from './views/points';
import Results from './views/Results';
import Fixtures from './views/Fixtures';

const SubHeader = () => (
  <Fragment>
    <div className="container">
      <div className="sub-header futsal">
        <ul className="nav nav--secondary">
          <li>
            <Link to={FUTSAL_ROUTES.RESULTS}>Results</Link>
          </li>
          <li>
            <Link to={FUTSAL_ROUTES.FIXTURES}>Fixtures</Link>
          </li>
          <li>
            <Link to={FUTSAL_ROUTES.POINTS}>Points</Link>
          </li>
          <li>
            <Link to={FUTSAL_ROUTES.STATS}>Stats</Link>
          </li>
          <li>
            <Link to={FUTSAL_ROUTES.TEAMS}>Teams</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="tournament-content">
      <div className="container">
        <Route path={FUTSAL_ROUTES.STATS} component={Stats} />
        <Route path={FUTSAL_ROUTES.TEAMS} component={Teams} />
        <Route path={FUTSAL_ROUTES.POINTS} component={Points} />
        <Route path={FUTSAL_ROUTES.RESULTS} component={Results} />
        <Route path={FUTSAL_ROUTES.FIXTURES} component={Fixtures} />
      </div>
    </div>
  </Fragment>
);

export default SubHeader;
