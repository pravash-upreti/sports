import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Responsive } from 'semantic-ui-react';

import logo from '../../../../public/assets/images/dummy-image.jpg';

import { NAV_MENU_ITEMS } from '../../../constants/constants';

import NavMenuItems from './UserLeftNav';
import withActiveMenu from '../../hocs/withActiveMenu';

const Navbar = props => {
  const { activeMenu, handleItemClick } = props;

  return (
    <Menu fixed="top">
      <Menu.Item header>
        <img src={logo} alt="Logo" />
      </Menu.Item>
      <Responsive as={Menu.Menu} minWidth={Responsive.onlyTablet.minWidth}>
        <NavMenuItems
          activeMenu={activeMenu}
          handleItemClick={handleItemClick}
        />
      </Responsive>
      <Responsive
        item
        icon="bars"
        as={Dropdown}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Dropdown.Menu>
          <NavMenuItems
            activeMenu={activeMenu}
            handleItemClick={handleItemClick}
          />
        </Dropdown.Menu>
      </Responsive>
    </Menu>
  );
};

Navbar.propTypes = {
  activeMenu: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired
};

export default withActiveMenu(NAV_MENU_ITEMS.home)(Navbar);
