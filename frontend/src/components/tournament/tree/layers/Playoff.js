import React from 'react';

import PlayoffRow from './PlayoffRow';
import LayerHeader from './LayerHeader';

import getRowsFromFixtures from '../../../../utils/tournament/getRowsFromFixtures';

const Playoff = (props) => {
  let playoffRows = getRowsFromFixtures(props.fixtures, (props.imgPerRow / 2));
  return (
    <div className="playoff-container">
      <LayerHeader title={props.layerTitle} />
      
      {
        playoffRows.map((row, item) => {
          return <PlayoffRow key={String(item)} matches={row} />
        })
      }
    </div>
  );
};

export default Playoff;
