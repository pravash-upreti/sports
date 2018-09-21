import React from 'react';
import PropTypes from 'prop-types';

import ScoreCard from '../../scoreCard';

const Results = props => {
  const resultEls = props.data.map((fixture, index) => <ScoreCard key={`result-${index}`} fixture={fixture} />);

  if (!resultEls.length) {
    return <div className="alert">No fixtures have bee played. Please checkout the fixtures section.</div>;
  }

  return resultEls;
};

Results.propTypes = {
  data: PropTypes.array
};

export default Results;
