import React from 'react';
import PropTypes from 'prop-types';

const FixtureResult = props => {
  let scoreEl =
    props.fixture.status.toLowerCase() === 'played' ? (
      <div className="result">
        {props.fixture.homeTeamScore}
        <span className="result-dash">-</span>
        {props.fixture.awayTeamScore}
      </div>
    ) : (
      <div className="result">
        <span className="versus">VS</span>
      </div>
    );

  if (props.fixture.status.toLowerCase() === 'cancelled') {
    scoreEl = (
      <div className="result">
        <span className="versus">Cancelled</span>
      </div>
    );
  }

  return <div className="score">{scoreEl}</div>;
};

FixtureResult.propTypes = {
  fixture: PropTypes.object
};

export default FixtureResult;
