import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import { NAV_MENU_ITEMS } from '../../../constants/constants';
import {
  ROOT,
  FIXTURE_OVERVIEW,
  TOURNAMENT_TREE
} from '../../../constants/routes';

const UserLeftNav = props => {
  const { activeRoute, handleItemClick } = props;

  return (
    <Fragment>
      <Menu.Item
        as={Link}
        to={ROOT}
        onClick={handleItemClick}
        name={NAV_MENU_ITEMS.home}
        active={activeRoute === ROOT}
      >
        Home
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={FIXTURE_OVERVIEW}
        onClick={handleItemClick}
        name={NAV_MENU_ITEMS.fixtureOverview}
        active={activeRoute === FIXTURE_OVERVIEW}
      >
        FixtureOverview
      </Menu.Item>
      <Menu.Item
        as={Link}
        to={TOURNAMENT_TREE}
        onClick={handleItemClick}
        name={NAV_MENU_ITEMS.tournamentTree}
        active={activeRoute === TOURNAMENT_TREE}
      >
        TournamentTree
      </Menu.Item>
    </Fragment>
  );
};

UserLeftNav.propTypes = {
  activeRoute: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired
};

export default UserLeftNav;
