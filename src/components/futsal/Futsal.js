import React from 'react';

import { futsalSVG } from '../../assets/images';

import SubHeader from './SubHeader';
import TournamentTitle from '../common/tournamentTitle';

const Futsal = () => (
  <div>
    <TournamentTitle title="Futsal League" season="2017" tournamentImage={futsalSVG} />
    <SubHeader />
  </div>
);

export default Futsal;
