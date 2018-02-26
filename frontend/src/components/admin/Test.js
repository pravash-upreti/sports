import React from 'react';
import { compose, withHandlers } from 'recompose';

import {
  DEFAULT_REFRESH_ERROR_MESSAGE,
  DEFAULT_USER_FETCH_ERROR_MESSAGE
} from '../../constants/errorMessages';

import fetchUsers from '../../services/userServices/fetchUsers';
import refreshAccessToken from '../../services/authServices/refreshAccessToken';

const Test = (props) => {
  return (
    <div>
      This is protected admin page.
      <button onClick={props.handleUserFetch}>Get Users</button>
      <button onClick={props.handleRefesh}>Refresh Token</button>
    </div>
  );
};

export default compose(
  withHandlers({
    handleUserFetch: ({ showToaster }) => (e) => {
      fetchUsers()
        .then((response) => {
          console.log('fetchUser response', response);
        })
        .catch((error) => {
          const errorMessage = error && error.error && error.error.message;

          if (errorMessage) {
            showToaster(errorMessage);

            return;
          }

          showToaster(DEFAULT_USER_FETCH_ERROR_MESSAGE);
        });
    },
    handleRefesh: ({ showToaster }) => (e) => {
      refreshAccessToken()
        .then((response) => {
          console.log('refresh response', response);
        })
        .catch((error) => {
          const errorMessage = error && error.error && error.error.message;

          if (errorMessage) {
            showToaster(errorMessage);

            return;
          }

          showToaster(DEFAULT_REFRESH_ERROR_MESSAGE);
        })
    }
  })
)(Test);
