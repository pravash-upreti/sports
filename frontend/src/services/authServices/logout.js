import { LOGOUT_ROUTE } from '../../constants/apiUrls';

import axiosInstance from '../../utils/axiosInstance';
import getAuthDetails from '../../utils/getAuthDetails';

/**
 * Logout from the server
 *
 * @export
 * @returns {object}
 * @throws {error}
 */
export default async function logout() {
  const { refreshToken } = getAuthDetails();

  axiosInstance.defaults.headers = {
    refresh: `Bearer ${refreshToken}`
  };

  try {
    const response = await axiosInstance.post(LOGOUT_ROUTE);

    return (response && response.data && response.data.data) || {};
  } catch (error) {
    throw error;
  }
}
