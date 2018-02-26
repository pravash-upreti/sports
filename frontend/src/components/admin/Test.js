import React from 'react';
import { compose, withHandlers } from 'recompose';

import fetchUsers from '../../services/userServices/fetchUsers';
import refreshAccessToken from '../../services/authServices/refreshAccessToken';

const DEFAULT_USER_FETCH_ERROR_MESSAGE = 'An error occured while downloading user. Please try again or refresh';
const DEFAULT_REFRESH_ERROR_MESSAGE = 'An error occured in refreshing token';

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
          // console.log('refresh response', response);
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
