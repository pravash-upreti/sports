import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChess, faCircle, faFutbol, faTableTennis } from '@fortawesome/fontawesome-free-solid';

import * as routes from '../../constants/routes';

import { logoSVG } from '../../assets/images';

const Header = () => (
  <header>
    <div className="container">
      <div className="logo-wrapper">
        <img src={logoSVG} alt="" />
      </div>
      <ul className="nav nav--primary">
        <li>
          <NavLink exact to={routes.FUTSAL} title="Futsal">
            <FontAwesomeIcon icon={faFutbol} size="lg" />
            <span className="nav__link-text">FUTSAL</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.CHESS} title="Chess">
            <FontAwesomeIcon icon={faChess} size="lg" />
            <span className="nav__link-text">CHESS</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.CAROM_BOARD} title="Carom-board">
            <FontAwesomeIcon icon={faCircle} size="lg" />
            <span className="nav__link-text">CAROM-BOARD</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.TABLE_TENNIS} title="Table Tennis">
            <FontAwesomeIcon icon={faTableTennis} size="lg" />
            <span className="nav__link-text">TABLE-TENNIS</span>
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
