import React from 'react';

import LayerHeader from './LayerHeader';
import RoundFixtures from './RoundFixtures';

const QuarterFinal = (props) => {
  return (
    <div className="quarter-final-container">
      <LayerHeader title={props.layerTitle} />
      <RoundFixtures numCards={props.numCards} fixtures={props.fixtures} />
    </div>
  );
};

export default QuarterFinal;
