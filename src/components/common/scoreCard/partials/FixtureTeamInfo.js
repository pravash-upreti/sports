import React from 'react';
import PropTypes from 'prop-types';

const FixtureTeamInfo = props => {
  let teamLogoEl = <span className="team-logo">{props.team.name.substring(0, 1)}</span>;

  if (props.team.image) {
    teamLogoEl = <img className="team-logo" src={props.team.image} alt={props.team.name} />;
  } else if (props.team.logo) {
    teamLogoEl = <span className="team-logo">{props.team.logo.text}</span>;
  }

  return (
    <div className="team-name-wrapper">
      <h2 className="team-name">
        {props.team.name}
        <span className="team-logo-wrapper">{teamLogoEl}</span>
      </h2>
    </div>
  );
};

FixtureTeamInfo.propTypes = {
  team: PropTypes.object
};

export default FixtureTeamInfo;
