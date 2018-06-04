import React from 'react';

import TournamentListItem from './TournamentListItem';

const TournamentContentGroup = () => (
    <div className="tournament-content__group">
        <div className="tournament-content__group--title">JULY</div>
        <ul className="tournament-list">
            {
                <TournamentListItem />
            }
        </ul>
    </div>
);

export default TournamentContentGroup;
