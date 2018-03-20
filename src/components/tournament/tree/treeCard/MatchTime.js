import React from 'react';
import PropTypes from 'prop-types';

const MatchTime = ({ day = 'FEB 23', time = '11:30 AM' }) => (
  <div className="date-time-container">
    <span className="day">{day}</span>
    <span className="time"> {time}</span>
  </div>
);

MatchTime.propTypes = {
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default MatchTime;
