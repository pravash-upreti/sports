import React, { Fragment } from 'react';

import { futsalSVG } from '../../assets/images';

import SubHeader from './SubHeader';
import TournamentTitle from '../common/tournamentTitle';

const Futsal = ({ match }) => (
  <Fragment>
    <TournamentTitle title="Futsal League" season="2017" tournamentImage={futsalSVG} />
    <SubHeader match={match} />
  </Fragment>
);

export default Futsal;
