import React from 'react';
import PropTypes from 'prop-types';

import Winners from './partials/Winners';
import RecentFixtures from './partials/RecentFixtures';

const Home = props => {
  const recents = props.data;

  if (recents.showWinners) {
    return <Winners winner={recents.winner} runnerUp={recents.runnerUp} />;
  }

  return <RecentFixtures data={recents} />;
};

Home.propTypes = {
  data: PropTypes.object
};

export default Home;
