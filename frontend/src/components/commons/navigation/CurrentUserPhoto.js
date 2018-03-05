import React from 'react';

import logo from '../../../../public/assets/images/dummy-image.jpg';

const CurrentUserPhoto = () => (
  <div className="navbar-user-photo">
    <img style={{ borderRadius: '50%' }} src={logo} alt="Logo" />
  </div>
);

export default CurrentUserPhoto;
