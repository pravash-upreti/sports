import React from 'react';

import PlayerPhoto from '../treeCard/PlayerPhoto';

import { IMAGE_SIZES } from '../../../../constants/constants';

const Winner = (props) => {
  const { img, name, title } = props;

  return (
    <div className="winner-container">
      <PlayerPhoto img={img} size={IMAGE_SIZES.large} />
      <h3 className="winner-name">{name}</h3>
      <p className="winner-title">{title}</p>
    </div>
  );
};

export default Winner;
