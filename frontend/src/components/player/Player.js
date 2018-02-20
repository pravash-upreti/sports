import React from 'react';

import image from '../../../public/assets/images/image.jpg';

const Player = (props) => {
  return (
    <div className="player-main-container">
      <div className="player-image-container">
        <img src={image} alt="player-image"/>
      </div>
      <div className="player-name-container">
        <span>Player 1</span>
      </div>
    </div>
  );
};

export default Player;
