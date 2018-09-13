import React from 'react';

import Content from './views/Content';
import TournamentTitle from '../common/tournamentTitle';

const CarromBoard = () => (
  <div className="carrom-board">
    <TournamentTitle title="Carrom Board Tournament" season="2018" />
    <Content />
  </div>
);

export default CarromBoard;
