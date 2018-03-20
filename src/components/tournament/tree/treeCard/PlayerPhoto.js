import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IMAGE_SIZES } from '../../../../constants/constants';

const PlayerPhoto = props => {
  const { img, size } = props;

  const photoClass = classNames({
    'photo-container-large': size === IMAGE_SIZES.large,
    'photo-container-small': size === IMAGE_SIZES.small,
    'photo-container-medium': size === IMAGE_SIZES.medium
  });

  return (
    <div className={photoClass}>
      <img src={img} alt="Player" />
    </div>
  );
};

PlayerPhoto.propTypes = {
  img: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

export default PlayerPhoto;
