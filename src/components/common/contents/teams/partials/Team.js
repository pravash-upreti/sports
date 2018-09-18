import React from 'react';
import PropTypes from 'prop-types';

import { getOneRandomColor } from '../../../../../utils/colorChooser';

const Team = props => {
  let playersEl = [];
  let titleEl = null;

  if (props.team.logo) {
    const styles = {
      color: props.team.logo.color,
      backgroundColor: props.team.logo.backgroundColor
    };

    titleEl = (
      <div className="team-title">
        <h4>
          <span className="team-title-logo-wrapper">
            <span className="team-title-logo" style={styles}>
              {props.team.logo.text}
            </span>
          </span>
          {props.team.name}
        </h4>
      </div>
    );
  }

  props.team.players.forEach((player, index) => {
    const styles = {
      backgroundColor: getOneRandomColor()
    };
    let teamLogoEl = (
      <span className="player-image" style={styles}>
        {player.name.substring(0, 1)}
      </span>
    );

    if (player.image) {
      teamLogoEl = <img className="player-image" src={player.image} alt={player.name} />;
    } else if (player.logo) {
      teamLogoEl = (
        <span className="player-image" style={styles}>
          {player.logo.text}
        </span>
      );
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
      {titleEl}
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
