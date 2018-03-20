import React from 'react';

import userImage from '../../../../public/assets/images/dummy-image.jpg';

const UserImage = () => (
  <div className="navbar-user-photo">
    <img src={userImage} alt="User" />
  </div>
);

export default UserImage;
