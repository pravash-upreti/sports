import React from 'react';
import PropTypes from 'prop-types';

import { parseFixtureDate } from '../../../../utils/fixtureHelpers';

const FixtureResult = props => {
  const fixture = props.fixture;
  const fixtureStatus = fixture.status.toLowerCase();
  const fixtureDate = parseFixtureDate(fixture.date);
  const scoreEl =
    fixtureStatus === 'cancelled' ? (
      <div className="result">
        <span className="versus">Cancelled</span>
      </div>
    ) : fixtureStatus === 'played' ? (
      <div className="result">
        {props.fixture.homeTeamScore} <span className="result-dash">-</span> {props.fixture.awayTeamScore}
      </div>
    ) : (
      <div className="result">
        <div className="versus">
          <p className="game-date">{fixtureDate.date}</p>
          <p className="game-time">{fixtureDate.time}</p>
          <p className="game-round">{fixture.round}</p>
        </div>
      </div>
    );

  return <div className="score">{scoreEl}</div>;
};

FixtureResult.propTypes = {
  fixture: PropTypes.object
};

export default FixtureResult;
