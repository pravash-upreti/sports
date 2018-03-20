import { IS_AUTHENTICATED, LOCAL_AUTH_VARIABLE } from '../constants/constants';

/**
 * Get authentication status and refresh token.
 *
 * @export
 * @returns {object}
 */
export default function getAuthDetails() {
  try {
    const authDetails = JSON.parse(localStorage.getItem(LOCAL_AUTH_VARIABLE));

    if (
      authDetails instanceof Object &&
      IS_AUTHENTICATED in authDetails &&
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
