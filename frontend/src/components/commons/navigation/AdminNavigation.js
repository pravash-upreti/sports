import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose, lifecycle, withState } from 'recompose';
import { Menu, Dropdown, Responsive } from 'semantic-ui-react';

import logo from '../../../../public/assets/images/sports-logo.svg';

import { ROOT, CHANGE_PASSWORD } from '../../../constants/routes';

import withActiveRoute from '../../hocs/withActiveRoute';

import UserImage from './UserImage';
import NavMenuItems from './AdminLeftNav';

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
              to={ROOT}
              text="Logout"
              icon="sign out"
              onClick={logout}
            />
            <Dropdown.Item
              as={Link}
              icon="key"
              to={CHANGE_PASSWORD}
              text="Change Password"
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
  withActiveRoute(ROOT),
  withState('dropDownTrigger', 'setDropDownTrigger', <div />),
  lifecycle({
    componentWillMount() {
      this.props.setDropDownTrigger(UserImage());
    }
  })
)(AdminNavigation);
