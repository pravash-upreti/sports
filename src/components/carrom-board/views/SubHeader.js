import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { CARROM_BOARD_ROUTES } from '../../../constants/routes';

const SubHeader = () => (
  <Fragment>
    <div className="container">
      <div className="sub-header">
        <ul className="nav nav--secondary">
          <li>
            <NavLink to={CARROM_BOARD_ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={CARROM_BOARD_ROUTES.FIXTURES}>Fixtures</NavLink>
          </li>
          <li>
            <NavLink to={CARROM_BOARD_ROUTES.RESULTS}>Results</NavLink>
          </li>
          <li>
            <NavLink to={CARROM_BOARD_ROUTES.TEAMS}>Teams</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
);

export default SubHeader;
