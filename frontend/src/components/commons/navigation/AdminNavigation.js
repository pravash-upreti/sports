import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose, lifecycle, withState } from 'recompose';
import { Menu, Dropdown, Responsive } from 'semantic-ui-react';

import logo from '../../../../public/assets/images/sports-logo.svg';

import * as routes from '../../../constants/routes';

import withActiveRoute from '../../hocs/withActiveRoute';

import NavMenuItems from './AdminLeftNav';
import CurrentUserPhoto from './CurrentUserPhoto';

const AdminNavigation = props => {
  const { logout, activeRoute, dropDownTrigger, handleItemClick } = props;

  return (
    <Menu borderless size="large" fixed="top">
      <Menu.Item header className="navbar-header">
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
      <Menu.Menu position="right">
        <Dropdown item icon={false} trigger={dropDownTrigger}>
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              text="Logout"
              icon="sign out"
              onClick={logout}
              to={routes.ROOT}
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

AdminNavigation.propTypes = {
  activeRoute: PropTypes.string,
  logout: PropTypes.func.isRequired,
  handleItemClick: PropTypes.func.isRequired,
  dropDownTrigger: PropTypes.element.isRequired
};

export default compose(
  withActiveRoute(routes.ROOT),
  withState('dropDownTrigger', 'setDropDownTrigger', <div />),
  lifecycle({
    componentWillMount() {
      this.props.setDropDownTrigger(CurrentUserPhoto());
    }
  })
)(AdminNavigation);
