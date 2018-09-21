import React from 'react';
import PropTypes from 'prop-types';

import { getParticipantLogoElement } from '../../../../utils/participantHelpers';

const FixtureTeamInfo = props => {
  const team = props.team;
  let teamCustomStyles = {
    margin: '0 8px'
  };

  if (team.logo) {
    teamCustomStyles = Object.assign(teamCustomStyles, {
      color: team.logo.color,
      backgroundColor: team.logo.backgroundColor
    });
  }

  const teamLogoEl = getParticipantLogoElement(team, teamCustomStyles);

  return (
    <div className="team-name-wrapper">
      <h2 className="team-name">
        {team.name}
        {teamLogoEl}
      </h2>
    </div>
  );
};

FixtureTeamInfo.propTypes = {
  team: PropTypes.object
};

export default FixtureTeamInfo;
