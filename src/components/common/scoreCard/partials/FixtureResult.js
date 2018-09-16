import React from 'react';
import PropTypes from 'prop-types';

const FixtureResult = props => {
  let scoreEl =
    props.fixture.status.toLowerCase() === 'played' ? (
      <h2 className="result">
        {props.fixture.homeTeamScore}
        <span className="result-dash">-</span>
        {props.fixture.awayTeamScore}
      </h2>
    ) : (
      <h2 className="result">
        <span className="versus">VS</span>
      </h2>
    );

  if (props.fixture.status.toLowerCase() === 'cancelled') {
    scoreEl = (
      <h2 className="result">
        <span className="versus">Cancelled</span>
      </h2>
    );
  }

  return <div className="score">{scoreEl}</div>;
};

FixtureResult.propTypes = {
  fixture: PropTypes.object
};

export default FixtureResult;
