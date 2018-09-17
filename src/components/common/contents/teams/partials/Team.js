import React from 'react';
import PropTypes from 'prop-types';

const Team = props => {
  let playersEl = [];
  const title = props.team.logo ? (
    <div className="team-title">
      <h3>{props.team.name}</h3>
    </div>
  ) : null;

  props.team.players.forEach((player, index) => {
    let teamLogoEl = <span className="player-image">{player.name.substring(0, 1)}</span>;

    if (player.image) {
      teamLogoEl = <img className="player-image" src={player.image} alt={player.name} />;
    } else if (player.logo) {
      teamLogoEl = <span className="player-image">{player.logo.text}</span>;
    }

    playersEl.push(
      <li key={`player-${index}`}>
        <span className="player-image-wrapper">{teamLogoEl}</span>
        {player.name}
      </li>
    );
  });

  return (
    <div className="team">
      {title}
      <div className="team-players-wrapper">
        <ul>{playersEl}</ul>
      </div>
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.object
};

export default Team;
