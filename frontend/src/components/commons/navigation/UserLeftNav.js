import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import * as routes from '../../../constants/routes';
import { NAV_MENU_ITEMS } from '../../../constants/constants';

const NavMenuItems = props => {
  const { activeMenu, handleItemClick } = props;

  return (
    <Fragment>
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
    </Fragment>
  );
};

NavMenuItems.propTypes = {
  activeMenu: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired
};

export default NavMenuItems;
