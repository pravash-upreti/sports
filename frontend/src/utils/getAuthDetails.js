import { LOCAL_AUTH_VARIABLE } from '../constants/constants';

export default function getAuthDetails() {
  try {
    const authDetails = JSON.parse(localStorage.getItem(LOCAL_AUTH_VARIABLE));

    if (
      authDetails instanceof Object &&
      'isAuthenticated' in authDetails &&
      authDetails.refreshToken
    ) {
      return authDetails;
    }

    return {
      refreshToken: '',
      isAuthenticated: false
    };
  } catch (error) {
    return {
      refreshToken: '',
      isAuthenticated: false
    };
  }
}
