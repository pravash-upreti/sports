import React from 'react';

import TournamentListItem from './TournamentListItem';

const TournamentContentGroup = (props) => {
    const { dataSet } = props;
    return(
        <div className="tournament-content__group">
            <div className="tournament-content__group--title">{dataSet.month}</div>
            {<ul className="tournament-list">
                {
                    dataSet.data.map((dataItem) => <TournamentListItem listItem = {dataItem}/>)
                }
            </ul>}
        </div>
    );
};

export default TournamentContentGroup;
