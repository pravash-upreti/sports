import React, { Fragment } from 'react';

const TournamentTitle = props => (
  <Fragment>
    <div className="tournament-title-wrapper">
      <div className="container">
        <div className="tournament-title">{`${props.title} ${props.season}`}</div>
      </div>
    </div>
  </Fragment>
);

export default TournamentTitle;
