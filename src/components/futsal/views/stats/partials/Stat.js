import React from 'react';
import PropTypes from 'prop-types';

const Stat = props => {
  let statImageEl = null;
  let playerListEl = <p>No players under this stat.</p>;
  const { image, title, players } = props.stat;

  if (players && !players.length) {
    return null;
  }

  if (image) {
    statImageEl = <img className="stat-image-logo" alt="" src={image} />;
  }

  if (players && players.length) {
    playerListEl = players.map(player => (
      <li key={`stat-player-${player.name}`}>
        <span className="stat-player-name">{player.name}</span>
        <span className="stat-player-stat">{player.count}</span>
      </li>
    ));
  }

  return (
    <div className="stats-col">
      <h4 className="stats-title">
        {statImageEl}
        {title}
      </h4>
      <ul>{playerListEl}</ul>
    </div>
  );
};

Stat.propTypes = {
  stat: PropTypes.object
};

export default Stat;
