import React from 'react';

import Card from './cardv2/index';

import playerUpImg from '../../../../public/assets/images/player-image.jpg';
import playerDownImg from '../../../../public/assets/images/player-image.jpg';

import Winner from './layers/Winner';
import Final from './layers/Final';

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
    <div className="tree-outer-container">
      <div className="tree-inner-container">
        <Winner {...players.playerUp} />
        <Final players={players} layerTitle="FINAL"/>
        {/* <Card {...players} /> */}
      </div>
    </div>
  );
}

export default Tree;
