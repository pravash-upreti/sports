import React from 'react';

import TournamentListItem from './TournamentListItem';

const TournamentContentGroup = (props) => (
    <div className="tournament-content__group">
        <div className="tournament-content__group--title">{props.dataSet.month}</div>
        <ul className="tournament-list">
            {
                props.dataSet.data.map((dataItem) => <TournamentListItem listItem = {dataItem}/>)
            }
        </ul>
    </div>
);

export default TournamentContentGroup;
