import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';

import { FUTSAL_ROUTES } from '../../constants/routes';

import Stats from './views/Stats';
import Teams from './views/Teams';
import Points from './views/Points';
import Results from './views/Results';
import Fixtures from './views/Fixtures';

const SubHeader = () => (
  <Fragment>
    <div className="sub-header futsal">
      <nav className="container">
        <ul>
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
      </nav>
    </div>

    <div className="container">
      <Route path={FUTSAL_ROUTES.STATS} component={Stats} />
      <Route path={FUTSAL_ROUTES.TEAMS} component={Teams} />
      <Route path={FUTSAL_ROUTES.POINTS} component={Points} />
      <Route path={FUTSAL_ROUTES.RESULTS} component={Results} />
      <Route path={FUTSAL_ROUTES.FIXTURES} component={Fixtures} />
    </div>
  </Fragment>
);

export default SubHeader;
