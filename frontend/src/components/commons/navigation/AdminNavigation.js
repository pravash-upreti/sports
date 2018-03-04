import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose, lifecycle, withState } from 'recompose';
import { Menu, Dropdown, Responsive } from 'semantic-ui-react';

import logo from '../../../../public/assets/images/dummy-image.jpg';

import * as routes from '../../../constants/routes';
import { NAV_MENU_ITEMS } from '../../../constants/constants';

import withActiveMenu from '../../hocs/withActiveMenu';

import CurrentUserPhoto from './CurrentUserPhoto';
import { Players, Tournaments } from './navMenuItems';

const Navbar = props => {
  const { logout, activeMenu, dropDownTrigger, handleItemClick } = props;

  return (
    <Menu fixed="top">
      <Menu.Item header>
        <img src={logo} alt="Logo" />
      </Menu.Item>
      <Responsive as={Menu.Menu} minWidth={Responsive.onlyTablet.minWidth}>
        <Tournaments
          handleItemClick={handleItemClick}
          activeMenu={activeMenu}
        />
        <Players handleItemClick={handleItemClick} activeMenu={activeMenu} />
      </Responsive>
      <Responsive
        as={Dropdown}
        item
        icon="bars"
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Dropdown.Menu>
          <Tournaments
            handleItemClick={handleItemClick}
            activeMenu={activeMenu}
          />
          <Players handleItemClick={handleItemClick} activeMenu={activeMenu} />
        </Dropdown.Menu>
      </Responsive>
      <Menu.Menu position="right">
        <Dropdown item icon={false} trigger={dropDownTrigger}>
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
      </Menu.Menu>
    </Menu>
  );
};

Navbar.propTypes = {
  activeMenu: PropTypes.string,
  logout: PropTypes.func.isRequired,
  handleItemClick: PropTypes.func.isRequired,
  dropDownTrigger: PropTypes.element.isRequired
};

export default compose(
  withActiveMenu(NAV_MENU_ITEMS.tournaments),
  withState('dropDownTrigger', 'setDropDownTrigger', <div />),
  lifecycle({
    componentWillMount() {
      this.props.setDropDownTrigger(CurrentUserPhoto());
    }
  })
)(Navbar);
