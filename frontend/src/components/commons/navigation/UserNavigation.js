import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import logo from '../../../../public/assets/images/dummy-image.jpg';

import * as routes from '../../../constants/routes';
import { NAV_MENU_ITEMS } from '../../../constants/constants';

import withActiveMenu from '../../hocs/withActiveMenu';

const Navbar = props => {
  const { activeMenu, handleItemClick } = props;

  return (
    <Menu fixed="top">
      <Menu.Item header>
        <img src={logo} alt="Logo" />
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={routes.ROOT}
        onClick={handleItemClick}
        name={NAV_MENU_ITEMS.home}
        active={activeMenu === NAV_MENU_ITEMS.home}
      >
        Home
      </Menu.Item>
      <Menu.Item
        as={Link}
        onClick={handleItemClick}
        to={routes.FIXTURE_OVERVIEW}
        name={NAV_MENU_ITEMS.fixtureOverview}
        active={activeMenu === NAV_MENU_ITEMS.fixtureOverview}
      >
        FixtureOverview
      </Menu.Item>
      <Menu.Item
        as={Link}
        onClick={handleItemClick}
        to={routes.TOURNAMENT_TREE}
        name={NAV_MENU_ITEMS.tournamentTree}
        active={activeMenu === NAV_MENU_ITEMS.tournamentTree}
      >
        TournamentTree
      </Menu.Item>
    </Menu>
  );
};

Navbar.propTypes = {
  activeMenu: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired
};

export default withActiveMenu(NAV_MENU_ITEMS.home)(Navbar);
