import React from 'react';
import PropTypes from 'prop-types';

const TournamentListItem = (props) => {
  const { listItem } = props;

  return (
    <li className="tournament-list__item">
      <div className="tournament-list__item--score-time">
                Full Time
      </div>
      <div className="tournament-list__item--date">
        <span className="day">{listItem.day} </span>
        <span className="date">{listItem.date}</span>
        <span className="time">{listItem.time}</span>
      </div>
      <div className="tournament-list__item--team-block tournament-list__item--team-block-left">
        <div className="tournament-list__item--team-left">
          <span className="name-card name-card--red">R</span>
          <span>{listItem.firstTeam.name}</span>
        </div>
        <div className="tournament-list__item--team-left-score">
          {listItem.firstTeam.score}
        </div>
      </div>
      <div className="tournament-list__item--separator">
                -
      </div>
      <div className="tournament-list__item--team-block tournament-list__item--team-block-right tournament-list__item--team-winner">
        <div className="tournament-list__item--team-right-score">
          {listItem.secondTeam.score}
        </div>
        <div className="tournament-list__item--team-right">
          <span className="name-card name-card--blue">F</span>
          <span>{listItem.secondTeam.name}</span>
        </div>
      </div>
      <div className="tournament-list__item--half-time">
        <span className="title">Half Time</span>
        <span className="score">{listItem.halfTimeScore.firstTeam} - {listItem.halfTimeScore.secondTeam}</span>
      </div>
    </li>
  );
};

TournamentListItem.propTypes = {
  listItem: PropTypes.object
};

export default TournamentListItem;
