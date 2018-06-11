import React from 'react';
import { object } from 'prop-types';

import TournamentListItem from './TournamentListItem';

const TournamentContentGroup = props => {
  const { dataSet } = props;

  return (
    <div className="tournament-content__group">
      <div className="tournament-content__group--title">{dataSet.month}</div>
      {
        <ul className="tournament-list">
          {dataSet.data.map(dataItem => <TournamentListItem key={dataItem.id} listItem={dataItem} />)}
        </ul>
      }
    </div>
  );
};

TournamentContentGroup.propTypes = {
  dataSet: object
};

export default TournamentContentGroup;
