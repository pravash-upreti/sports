import React from 'react';
import PropTypes from 'prop-types';

import { getParticipantLogoElement } from '../../../../../utils/participantHelpers';

const Team = props => {
  const team = props.team;
  let playersEl = [];
  let titleEl = null;
  let teamPlayerCustomStyles = null;

  if (team.logo) {
    teamPlayerCustomStyles = {
      color: team.logo.color,
      backgroundColor: team.logo.backgroundColor
    };

    const logoEl = getParticipantLogoElement(team);

    titleEl = (
      <div className="team-title">
        <h4>
          {logoEl}
          {team.name}
        </h4>
      </div>
    );
  }

  team.players.forEach((player, index) => {
    const playerLogoEl = getParticipantLogoElement(player, teamPlayerCustomStyles);

    playersEl.push(
      <li key={`player-${index}`}>
        {playerLogoEl}
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
