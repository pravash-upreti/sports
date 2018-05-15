import React, { Fragment } from 'react';

import { futsalSVG } from '../../assets/images';

import SubHeader from './SubHeader';
import TournamentTitle from '../common/tournamentTitle';

const Futsal = () => (
  <Fragment>
    <TournamentTitle title="Futsal League" season="2017" tournamentImage={futsalSVG} />
    <SubHeader />
  </Fragment>
);

export default Futsal;
