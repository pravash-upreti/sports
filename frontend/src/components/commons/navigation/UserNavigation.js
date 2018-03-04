import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { compose, withState, withHandlers } from 'recompose';

import logo from '../../../../public/assets/images/dummy-image.jpg';

import * as routes from '../../../constants/routes';

const Navbar = props => {
  const { activeMenu, handleItemClick } = props;

  return (
    <Menu fixed="top">
      <Menu.Item header>
        <img src={logo} alt="Logo" />
      </Menu.Item>
      <Menu.Item
        as={Link}
        name="home"
        to={routes.ROOT}
        onClick={handleItemClick}
        active={activeMenu === 'home'}
      >
        Home
      </Menu.Item>
      <Menu.Item
        as={Link}
        name="fixtureOverview"
        onClick={handleItemClick}
        to={routes.FIXTURE_OVERVIEW}
        active={activeMenu === 'fixtureOverview'}
      >
        FixtureOverview
      </Menu.Item>
      <Menu.Item
        as={Link}
        name="tree"
        onClick={handleItemClick}
        to={routes.TOURNAMENT_TREE}
        active={activeMenu === 'tree'}
      >
        Tree
      </Menu.Item>
    </Menu>
  );
};

Navbar.propTypes = {
  activeMenu: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired
};

export default compose(
  withState('activeMenu', 'setActiveMenu', 'home'),
  withHandlers({
    handleItemClick: ({ setActiveMenu }) => (e, props) => {
      setActiveMenu(props.name);
    }
  })
)(Navbar);
