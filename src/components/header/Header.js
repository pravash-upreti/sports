import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from '../../constants/routes';

import { logoSVG } from '../../assets/images';

const Header = () => (
  <div className="header">
    <nav>
      <div className="logo-wrapper">
        <img src={logoSVG} alt="" />
      </div>

      <ul className="pull-right">
        <li>
          <NavLink exact to={routes.HOME}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.CHESS}>
            CHESS
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.FUTSAL}>
            FUTSAL
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
