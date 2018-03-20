import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';
import MatchTime from './MatchTime';

const Card = props => {
  const { playerUp, matchTime, playerDown } = props;

  return (
    <div className="card">
      <MatchTime {...matchTime} />
      <Player {...playerUp} />
      <Player {...playerDown} />
    </div>
  );
};

Card.propTypes = {
  playerUp: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  matchTime: PropTypes.shape({
    day: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }),
  playerDown: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default Card;
