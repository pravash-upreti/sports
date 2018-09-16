import React from 'react';
import PropTypes from 'prop-types';

import ScoreCard from '../../common/scoreCard';

const Fixtures = props => {
  const fixtureEls = props.data.map((fixture, index) => <ScoreCard key={`fixture-${index}`} fixture={fixture} />);

  if (!fixtureEls.length) {
    return <div className="alert">All fixtures have bee played. Please checkout the results section.</div>;
  }

  return fixtureEls;
};

Fixtures.propTypes = {
  data: PropTypes.array
};

export default Fixtures;
