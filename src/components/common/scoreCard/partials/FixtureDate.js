import React from 'react';
import PropTypes from 'prop-types';

const FixtureDate = props => (
  <div className="other-info date">
    <p className="game-time">{props.fixtureDate.time}</p>
    <p className="game-time">{props.fixtureDate.weekDay}</p>
    <p>{props.fixtureDate.date}</p>
  </div>
);

FixtureDate.propTypes = {
  fixtureDate: PropTypes.object
};

export default FixtureDate;
