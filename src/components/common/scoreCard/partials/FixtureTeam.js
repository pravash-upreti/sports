import React from 'react';
import PropTypes from 'prop-types';

import { getParticipantLogoElement } from '../../../../utils/participantHelpers';

const FixtureTeam = props => {
  const team = props.team;
  let teamLogoEl = null;
  let isGroupedClassNames = '';
  let teamCustomStyles = {
    margin: '0 8px'
  };

  // If the team name represents combination of two or more players
  const isGrouped = !!props.team.players;

  if (isGrouped) {
    isGroupedClassNames = 'team-grouped';
    teamLogoEl = props.team.players.map(player => getParticipantLogoElement(player, teamCustomStyles));
  } else {
    teamLogoEl = getParticipantLogoElement(team, teamCustomStyles);
  }

  if (team.logo) {
    teamCustomStyles = Object.assign(teamCustomStyles, {
      color: team.logo.color,
      backgroundColor: team.logo.backgroundColor
    });
  }

  return (
    <div className={`team-info ${props.classNames}`}>
      <div className="team-name-wrapper">
        <h2 className={`team-name ${isGroupedClassNames}`}>
          {team.name}
          <span className="participant-logo-wrapper">{teamLogoEl}</span>
        </h2>
      </div>
    </div>
  );
};

FixtureTeam.propTypes = {
  team: PropTypes.object,
  classNames: PropTypes.string
};

export default FixtureTeam;
