import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Responsive } from 'semantic-ui-react';

import logo from '../../../../public/assets/images/sports-logo.svg';

import { ROOT } from '../../../constants/routes';

import NavMenuItems from './UserLeftNav';
import withActiveRoute from '../../hocs/withActiveRoute';

const UserNavigation = props => {
  const { activeRoute, handleItemClick } = props;

  return (
    <Menu borderless size="massive" fixed="top">
      <Menu.Item header as={Link} to={ROOT} className="navbar-header">
        <img src={logo} alt="Logo" />
      </Menu.Item>
      {/* Todo: The following may be used in the future */}
      {/* <Responsive as={Menu.Menu} minWidth={Responsive.onlyTablet.minWidth}>
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
      </Responsive> */}
    </Menu>
  );
};

UserNavigation.propTypes = {
  activeRoute: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired
};

export default withActiveRoute(ROOT)(UserNavigation);
