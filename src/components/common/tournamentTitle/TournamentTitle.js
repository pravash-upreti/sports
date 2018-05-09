import React from 'react';

const TournamentTitle = props => (
  <div className="tournament-title-wrapper">
    <div className="container">
      <div className="tournament-title">
        {props.title} {props.season}
      </div>
    </div>
  </div>
);

export default TournamentTitle;
