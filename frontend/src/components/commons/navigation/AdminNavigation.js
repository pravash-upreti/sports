import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';
import { compose, withState, withHandlers } from 'recompose';

import logo from '../../../../public/assets/images/dummy-image.jpg';

import * as routes from '../../../constants/routes';

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
        name="tournaments"
        onClick={handleItemClick}
        to={routes.ADMIN_TOURNAMENTS}
        active={activeMenu === 'tournaments'}
      >
        Tournaments
      </Menu.Item>
      <Menu.Item
        as={Link}
        name="players"
        to={routes.ADMIN_PLAYERS}
        onClick={handleItemClick}
        active={activeMenu === 'players'}
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

export default compose(
  withState('activeMenu', 'setActiveMenu', 'tournaments'),
  withHandlers({
    handleItemClick: ({ setActiveMenu }) => (e, props) => {
      setActiveMenu(props.name);
    }
  })
)(Navbar);
