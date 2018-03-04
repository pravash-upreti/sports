import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import * as routes from '../../../constants/routes';
import { NAV_MENU_ITEMS } from '../../../constants/constants';

const NavMenuItems = props => {
  const { activeRoute, handleItemClick } = props;

  return (
    <Fragment>
      <Menu.Item
        as={Link}
        onClick={handleItemClick}
        to={routes.ADMIN_TOURNAMENTS}
        name={NAV_MENU_ITEMS.tournaments}
        active={activeRoute === routes.ADMIN_TOURNAMENTS}
      >
        Tournaments
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={routes.ADMIN_PLAYERS}
        onClick={handleItemClick}
        name={NAV_MENU_ITEMS.players}
        active={activeRoute === routes.ADMIN_PLAYERS}
      >
        Players
      </Menu.Item>
    </Fragment>
  );
};

NavMenuItems.propTypes = {
  activeRoute: PropTypes.string,
  handleItemClick: PropTypes.func
};

export default NavMenuItems;
