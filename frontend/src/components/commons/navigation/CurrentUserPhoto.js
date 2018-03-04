import React from 'react';

import logo from '../../../../public/assets/images/dummy-image.jpg';

const CurrentUserPhoto = () => (
  <div style={{ width: '40px', height: '40px', borderRadius: '50%' }}>
    <img style={{ borderRadius: '50%' }} src={logo} alt="Logo" />
  </div>
);

export default CurrentUserPhoto;
