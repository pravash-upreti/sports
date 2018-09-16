import PropTypes from 'prop-types';
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

TournamentTitle.propTypes = {
  title: PropTypes.string,
  season: PropTypes.number
};

export default TournamentTitle;
