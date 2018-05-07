import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChess, faCircle, faFutbol, faTableTennis } from '@fortawesome/fontawesome-free-solid';

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
          <NavLink exact to={routes.FUTSAL}>
            <FontAwesomeIcon icon={faFutbol} size="lg" />
            <span className="nav-link-text"> FUTSAL</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.CHESS}>
            <FontAwesomeIcon icon={faChess} size="lg" />
            <span className="nav-link-text"> CHESS</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.CAROM_BOARD}>
            <FontAwesomeIcon icon={faCircle} size="lg" />
            <span className="nav-link-text"> CAROM-BOARD</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.TABLE_TENNIS}>
            <FontAwesomeIcon icon={faTableTennis} size="lg" />
            <span className="nav-link-text"> TABLE-TENNIS</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
