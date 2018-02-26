import { LOCAL_AUTH_VARIABLE } from '../constants/constants';

export default function getAuthDetails() {
  try {
    let authDetails = JSON.parse(localStorage.getItem(LOCAL_AUTH_VARIABLE));
    if (authDetails instanceof Object && 'isAuthenticated' in authDetails && authDetails.refreshToken) {
      return authDetails;
    }

    return {
      isAuthenticated: false,
      refreshToken: ''
    };
  } catch (error) {
    return {
      isAuthenticated: false,
      refreshToken: ''
    };
  }
};
