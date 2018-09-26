import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const Winners = props => (
  <div>
    <div>
      <h2 className="fixture-title">WINNERS</h2>
      <h1 className="winners">
        <FontAwesomeIcon icon={faMedal} className="winner-trophy" />
        {props.winner}
        <FontAwesomeIcon icon={faMedal} className="winner-trophy" />
      </h1>
    </div>
    <div>
      <h2 className="fixture-title">RUNNER-UP</h2>
      <h1 className="runner-up">
        <FontAwesomeIcon icon={faMedal} className="runner-up-trophy" />
        {props.runnerUp}
        <FontAwesomeIcon icon={faMedal} className="runner-up-trophy" />
      </h1>
    </div>
  </div>
);

Winners.propTypes = {
  winner: PropTypes.string,
  runnerUp: PropTypes.string
};

export default Winners;
