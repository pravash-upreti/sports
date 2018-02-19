import React from 'react';

import { SMALL, MEDIUM, LARGE } from '../../../../constants/sizeConstants';

const PlayerPhoto = (props) => {
  const { size, img } = props;

  let photoClass = "photo-container-small";

  if (size === MEDIUM) photoClass="photo-container-medium";
  if (size === LARGE) photoClass="photo-container-large";

  return (
    <div className={photoClass}>
      <img src={img} alt="Player image" />
    </div>
  );
}

export default PlayerPhoto;
