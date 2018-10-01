import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChess, faFutbol, faTableTennis, faVectorSquare } from '@fortawesome/free-solid-svg-icons';

import { BASE_ROUTES } from '../../constants/routes';

import { invertedLogo } from '../../assets/images';

const Header = props => (
  <header>
    <div className="container-fluid">
      <div className="logo-wrapper">
        <img className="logo" src={invertedLogo} alt="" />
        <div className="logo-title">{`${props.pageTitle.mainText} ${props.pageTitle.secondaryText}`}</div>
      </div>
      <ul className="nav nav--primary">
        <li>
          <NavLink to={BASE_ROUTES.FUTSAL} title="Futsal">
            <FontAwesomeIcon icon={faFutbol} size="lg" />
            <span className="nav__link-text">FUTSAL</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={BASE_ROUTES.CHESS} title="Chess">
            <FontAwesomeIcon icon={faChess} size="lg" />
            <span className="nav__link-text">CHESS</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={BASE_ROUTES.CARROM_BOARD} title="Carom-board">
            <FontAwesomeIcon icon={faVectorSquare} size="lg" />
            <span className="nav__link-text">CAROM-BOARD</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={BASE_ROUTES.TABLE_TENNIS} title="Table Tennis">
            <FontAwesomeIcon icon={faTableTennis} size="lg" />
            <span className="nav__link-text">TABLE-TENNIS</span>
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  pageTitle: PropTypes.object
};

export default Header;
