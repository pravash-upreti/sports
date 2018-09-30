import React from 'react';
import PropTypes from 'prop-types';

import Winners from './partials/Winners';
import RecentFixtures from './partials/RecentFixtures';

const Home = props => {
  const recents = props.data;
  const recentEl = recents.showWinners ? (
    <Winners winner={recents.winner} runnerUp={recents.runnerUp} />
  ) : (
    <RecentFixtures data={recents} />
  );

  return <div className="container">{recentEl}</div>;
};

Home.propTypes = {
  data: PropTypes.object
};

export default Home;
