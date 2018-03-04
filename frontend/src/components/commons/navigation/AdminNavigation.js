import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

import logo from '../../../../public/assets/images/dummy-image.jpg';

import * as routes from '../../../constants/routes';
import { NAV_MENU_ITEMS } from '../../../constants/constants';

import withActiveMenu from '../../hocs/withActiveMenu';

const dropTrigger = (
  <div style={{ width: '40px', height: '40px', borderRadius: '50%' }}>
    <img style={{ borderRadius: '50%' }} src={logo} alt="Logo" />
  </div>
);

// Save Navbar menu names in constants file.

const Navbar = props => {
  const { logout, activeMenu, handleItemClick } = props;

  return (
    <Menu fixed="top">
      <Menu.Item header>
        <img src={logo} alt="Logo" />
      </Menu.Item>
      <Menu.Item
        as={Link}
        onClick={handleItemClick}
        to={routes.ADMIN_TOURNAMENTS}
        name={NAV_MENU_ITEMS.tournaments}
        active={activeMenu === NAV_MENU_ITEMS.tournaments}
      >
        Tournaments
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={routes.ADMIN_PLAYERS}
        onClick={handleItemClick}
        name={NAV_MENU_ITEMS.players}
        active={activeMenu === NAV_MENU_ITEMS.players}
      >
        Players
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Dropdown icon={false} trigger={dropTrigger}>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                text="Logout"
                icon="sign out"
                onClick={logout}
                to={routes.LOGOUT}
              />
              <Dropdown.Item
                as={Link}
                icon="key"
                text="Change Password"
                to={routes.CHANGE_PASSWORD}
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

Navbar.propTypes = {
  activeMenu: PropTypes.string,
  logout: PropTypes.func.isRequired,
  handleItemClick: PropTypes.func.isRequired
};

export default withActiveMenu(NAV_MENU_ITEMS.tournaments)(Navbar);
