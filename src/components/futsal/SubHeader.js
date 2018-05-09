import React from 'react';
import { NavLink } from 'react-router-dom';

import { FUTSAL_ROUTES } from '../../constants/routes';

const SubHeader = () => (
  <div className="sub-header futsal">
    <nav className="container">
      <ul>
        <li>
          <NavLink to={FUTSAL_ROUTES.RESULTS}>Results</NavLink>
        </li>
        <li>
          <NavLink to={FUTSAL_ROUTES.FIXTURES}>Fixtures</NavLink>
        </li>
        <li>
          <NavLink to={FUTSAL_ROUTES.TABLE}>Points</NavLink>
        </li>
        <li>
          <NavLink to={FUTSAL_ROUTES.STATS}>Stats</NavLink>
        </li>
        <li>
          <NavLink to={FUTSAL_ROUTES.TEAMS}>Teams</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default SubHeader;
