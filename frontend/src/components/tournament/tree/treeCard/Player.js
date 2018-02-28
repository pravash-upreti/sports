import React from 'react';
import PropTypes from 'prop-types';

import PlayerPhoto from './PlayerPhoto';

const Player = props => {
  const { img, name } = props;

  return (
    <div className="player">
      <div className="player-name">{name}</div>
      <PlayerPhoto img={img} size="small" />
    </div>
  );
};

Player.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Player;
