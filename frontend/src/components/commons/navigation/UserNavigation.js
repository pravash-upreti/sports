import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Responsive } from 'semantic-ui-react';

import logo from '../../../../public/assets/images/dummy-image.jpg';

import { ROOT } from '../../../constants/routes';

import NavMenuItems from './UserLeftNav';
import withActiveRoute from '../../hocs/withActiveRoute';

const Navbar = props => {
  const { activeRoute, handleItemClick } = props;

  return (
    <Menu fixed="top">
      <Menu.Item header>
        <img src={logo} alt="Logo" />
      </Menu.Item>
      <Responsive as={Menu.Menu} minWidth={Responsive.onlyTablet.minWidth}>
        <NavMenuItems
          activeRoute={activeRoute}
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
            activeRoute={activeRoute}
            handleItemClick={handleItemClick}
          />
        </Dropdown.Menu>
      </Responsive>
    </Menu>
  );
};

Navbar.propTypes = {
  activeRoute: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired
};

export default withActiveRoute(ROOT)(Navbar);
