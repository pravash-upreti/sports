import React from 'react';
import PropTypes from 'prop-types';

import { IMAGE_SIZES } from '../../../../constants/constants';

import PlayerPhoto from '../treeCard/PlayerPhoto';

const Winner = props => {
  const { img, name, title } = props;

  return (
    <div className="winner-container">
      <PlayerPhoto img={img} size={IMAGE_SIZES.large} />
      <h3 className="winner-name">{name}</h3>
      <p className="winner-title">{title}</p>
    </div>
  );
};

Winner.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Winner;
