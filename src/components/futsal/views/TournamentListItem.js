import React from 'react';

const TournamentListItem = (props) => (
    <li className="tournament-list__item">
        <div className="tournament-list__item--score-time">
            Full Time
        </div>
        <div className="tournament-list__item--date">
            <span className="day">Sunday </span>
            <span className="date">{props.listItem.date}</span>
            <span className="time">10:00AM</span>
        </div>
        <div className="tournament-list__item--team-block tournament-list__item--team-block-left">
            <div className="tournament-list__item--team-left">
                <span className="name-card name-card--red">R</span>
                <span>The Royal Strikers</span>
            </div>
            <div className="tournament-list__item--team-left-score">
                3
            </div>
        </div>
        <div className="tournament-list__item--separator">
            -
        </div>
        <div className="tournament-list__item--team-block tournament-list__item--team-block-right tournament-list__item--team-winner">
            <div className="tournament-list__item--team-right-score">
                8
            </div>
            <div className="tournament-list__item--team-right">
                <span className="name-card name-card--blue">F</span>
                <span>Flying Pundits</span>
            </div>
        </div>
        <div className="tournament-list__item--half-time">
            <span className="title">Half Time</span>
            <span className="score">1 - 2</span>
        </div>
    </li>
);

export default TournamentListItem;
