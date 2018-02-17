import React, { Fragment } from 'react';

import Card from './cardv2/index';

import playerUpImg from '../../../../public/assets/images/player-image.jpg';
import playerDownImg from '../../../../public/assets/images/player-image.jpg';

const Tree = (props) => {
  const players = {
    playerUp: {
      name: 'SAGUN',
      img: playerUpImg
    },
    playerDown: {
      name: 'CHUMLUNG',
      img: playerDownImg
    }
  };
  return (
    <Fragment>
      <Card {...players}/>
    </Fragment>
  )
}

export default Tree;
