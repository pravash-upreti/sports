import React from 'react';
import PropTypes from 'prop-types';

import ScoreCard from '../../scoreCard';

const Results = props => {
  const resultEls = !props.data.length ? (
    <div className="alert">No fixtures have been played. Please checkout the fixtures section.</div>
  ) : (
    props.data.map((fixture, index) => <ScoreCard key={`result-${index}`} fixture={fixture} />)
  );

  return <div className="container">{resultEls}</div>;
};

Results.propTypes = {
  data: PropTypes.array
};

export default Results;
