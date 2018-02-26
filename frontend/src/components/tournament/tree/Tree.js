import React from 'react';

import Layer from './layers/Layer';
import Winner from './layers/Winner';
import Playoff from './layers/Playoff';

import {
  WINNER,
  FINAL,
  SEMI_FINAL,
  QUARTER_FINAL,
  ROUND_OF_SIXTEEN,
  PLAYOFFS
} from '../../../constants/rounds';

const Tree = props => (
  <div className="tree-outer-container">
    <div className="tree-inner-container">
      <Winner {...WINNER} />
      <Layer
        layerTitle={FINAL.title}
        fixtures={FINAL.fixtures}
        containerClass="final-container"
      />
      <Layer
        layerTitle={SEMI_FINAL.title}
        fixtures={SEMI_FINAL.fixtures}
        containerClass="semi-final-container"
      />
      <Layer
        layerTitle={QUARTER_FINAL.title}
        fixtures={QUARTER_FINAL.fixtures}
        containerClass="quarter-final-container"
      />
      <Layer
        layerTitle={ROUND_OF_SIXTEEN.title}
        fixtures={ROUND_OF_SIXTEEN.fixtures}
        containerClass="round-of-sixteen-container"
      />
      <Playoff layerTitle={PLAYOFFS.title} fixtures={PLAYOFFS.fixtures} />
    </div>
  </div>
);

export default Tree;
