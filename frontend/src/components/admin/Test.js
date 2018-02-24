import React from 'react';

import fetchUsers from '../../services/userServices/fetchUsers';
import refreshAccessToken from '../../services/authServices/refreshAccessToken';

const Test = (props) => {
  return (
    <div>
      This is protected admin page.
      <button onClick={fetchUsers}>Get Users</button>
      <button onClick={refreshAccessToken}>Refresh Token</button>
    </div>
  );
};

export default Test;
