import React from 'react';
import PropTypes from 'prop-types';

import { getParticipantLogoElement } from '../../../../utils/participantHelpers';

const FixtureTeam = props => {
  const team = props.team;
  let teamCustomStyles = {
    margin: '0 8px'
  };

  const teamLogoEl = getParticipantLogoElement(team, teamCustomStyles);

  if (team.logo) {
    teamCustomStyles = Object.assign(teamCustomStyles, {
      color: team.logo.color,
      backgroundColor: team.logo.backgroundColor
    });
  }

  // If the team name represents combination of two or more players
  // const isGrouped = !!props.team.players;

  return (
    <div className={`team-info ${props.classNames}`}>
      <div className="team-name-wrapper">
        <h2 className="team-name">
          {team.name}
          {teamLogoEl}
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
