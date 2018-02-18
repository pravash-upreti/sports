import React from 'react';

import Final from './layers/Final';
import Winner from './layers/Winner';
import Playoff from './layers/Playoff';
import SemiFinal from './layers/SemiFinal';
import QuarterFinal from './layers/QuarterFinal';
import RoundOfSixteen from './layers/RoundOfSixteen';

import {
WINNER, FINAL, SEMI_FINAL, QUARTER_FINAL, ROUND_OF_SIXTEEN, PLAYOFFS
} from '../../../constants/rounds';

const Tree = (props) => {
  return (
    <div className="tree-outer-container">
      <div className="tree-inner-container">
        <Winner {...WINNER} />
        <Final layerTitle={FINAL.title} numCards={FINAL.numMatches} fixtures={FINAL.fixtures} />
        <SemiFinal layerTitle={SEMI_FINAL.title} numCards={SEMI_FINAL.numMatches} fixtures={SEMI_FINAL.fixtures} />
        <QuarterFinal layerTitle={QUARTER_FINAL.title} numCards={QUARTER_FINAL.numMatches} fixtures={QUARTER_FINAL.fixtures} />
        <RoundOfSixteen layerTitle={ROUND_OF_SIXTEEN.title} numCards={ROUND_OF_SIXTEEN.numMatches} fixtures={ROUND_OF_SIXTEEN.fixtures} />
        <Playoff layerTitle={PLAYOFFS.title} fixtures={PLAYOFFS.fixtures} imgPerRow={PLAYOFFS.imgPerRow} />
      </div>
    </div>
  );
}

export default Tree;
