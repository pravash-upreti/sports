import React from 'react';

const TournamentTitle = props => (
  <div className="tournament-title-wrapper">
    <img className="tournament-image" src={props.tournamentImage} alt={props.title} />

    <div className="tournament-title">
      <div>{props.title}</div>
      <div>{props.season}</div>
    </div>
  </div>
);

export default TournamentTitle;
