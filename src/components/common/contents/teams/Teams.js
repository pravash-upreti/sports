import React from 'react';
import PropTypes from 'prop-types';

import Team from './partials/Team';

const Teams = props => {
  const els = props.data.map((team, index) => <Team key={`team-${index}`} team={team} />);

  return (
    <div className="container">
      <div className="teams-wrapper">{els}</div>
    </div>
  );
};

Teams.propTypes = {
  data: PropTypes.array
};

export default Teams;
