import React from 'react';

import playerImage from '../../../../public/assets/images/dummy-image.jpg';

const CurrentUserPhoto = () => (
  <div className="navbar-user-photo">
    <img style={{ borderRadius: '50%' }} src={playerImage} alt="Logo" />
  </div>
);

export default CurrentUserPhoto;
