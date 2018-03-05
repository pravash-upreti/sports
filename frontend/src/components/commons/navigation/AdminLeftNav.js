import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import { NAV_MENU_ITEMS } from '../../../constants/constants';
import { ADMIN_PLAYERS, ADMIN_TOURNAMENTS } from '../../../constants/routes';

const AdminLeftNavBar = props => {
  const { activeRoute, handleItemClick } = props;

  return (
    <Fragment>
      <Menu.Item
        as={Link}
        to={ADMIN_TOURNAMENTS}
        onClick={handleItemClick}
        name={NAV_MENU_ITEMS.tournaments}
        active={activeRoute === ADMIN_TOURNAMENTS}
      >
        Tournaments
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={ADMIN_PLAYERS}
        onClick={handleItemClick}
        name={NAV_MENU_ITEMS.players}
        active={activeRoute === ADMIN_PLAYERS}
      >
        Players
      </Menu.Item>
    </Fragment>
  );
};

AdminLeftNavBar.propTypes = {
  activeRoute: PropTypes.string,
  handleItemClick: PropTypes.func
};

export default AdminLeftNavBar;
