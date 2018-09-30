import React from 'react';
import PropTypes from 'prop-types';

import ScoreCard from '../../scoreCard';

const Fixtures = props => {
  const fixtureEls = !props.data.length ? (
    <div className="alert">All fixtures have bee played. Please checkout the results section.</div>
  ) : (
    props.data.map((fixture, index) => <ScoreCard key={`fixture-${index}`} fixture={fixture} />)
  );

  return <div className="container">{fixtureEls}</div>;
};

Fixtures.propTypes = {
  data: PropTypes.array
};

export default Fixtures;
