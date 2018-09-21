import React from 'react';
import PropTypes from 'prop-types';

import FixtureTeamInfo from './FixtureTeamInfo';

const FixtureTeam = props => {
  let teamEls = [];

  if (props.team.players) {
    props.team.players.forEach((player, index) => {
      teamEls.push(<FixtureTeamInfo team={player} key={`team-player-${index}`} />);
    });
  } else {
    teamEls.push(<FixtureTeamInfo team={props.team} key={`team-player-${props.team.id}`} />);
  }

  return <div className={`team-info ${props.classNames}`}>{teamEls}</div>;
};

FixtureTeam.propTypes = {
  team: PropTypes.object,
  classNames: PropTypes.string
};

export default FixtureTeam;
