import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { FUTSAL_ROUTES } from '../../../constants/routes';

const SubHeader = () => (
  <Fragment>
    <div className="container-fluid">
      <div className="sub-header">
        <ul className="nav nav--secondary container">
          <li>
            <NavLink to={FUTSAL_ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={FUTSAL_ROUTES.RESULTS}>Results</NavLink>
          </li>
          <li>
            <NavLink to={FUTSAL_ROUTES.FIXTURES}>Fixtures</NavLink>
          </li>
          <li>
            <NavLink to={FUTSAL_ROUTES.POINTS}>Points</NavLink>
          </li>
          <li>
            <NavLink to={FUTSAL_ROUTES.STATS}>Stats</NavLink>
          </li>
          <li>
            <NavLink to={FUTSAL_ROUTES.TEAMS}>Teams</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
);

export default SubHeader;
