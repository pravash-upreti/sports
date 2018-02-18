import React from 'react';

import LayerHeader from './LayerHeader';
import PlayoffRow from './PlayoffRow';

const getRowsFromFixtures = (fixtures, pairPerRow) => {
  const numRows = Math.ceil(fixtures.length / pairPerRow);
  const rowArr = [];
  for(let i = 0; i < numRows; i++) {
    rowArr[i] = fixtures.slice(i * pairPerRow, (i+1) * pairPerRow);
  }
  return rowArr;
}

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
