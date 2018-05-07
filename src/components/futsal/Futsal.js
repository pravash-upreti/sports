import React from 'react';

import { futsalSVG } from '../../assets/images';

import TournamentTitle from '../common/tournamentTitle';

const Futsal = () => (
  <div>
    <div className="row">
      <TournamentTitle title="Futsal League" season="2017" tournamentImage={futsalSVG} />
    </div>
  </div>
);

export default Futsal;
