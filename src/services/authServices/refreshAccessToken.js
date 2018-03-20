import { REFRESH_ROUTE } from '../../constants/apiUrls';
import { DEFAULT_TOASTER_MESSAGE } from '../../constants/errorMessages';

import getAuthDetails from '../../utils/getAuthDetails';
import axiosInstance, { setTokenInHeader } from '../../utils/axiosInstance';

/**
 * Refresh access token
 *
 * @export
 * @returns {string}
 * @throws {error}
 */
export default async function refreshAccessToken() {
  try {
    const { refreshToken } = getAuthDetails();
    axiosInstance.defaults.headers = {
      refresh: `Bearer ${refreshToken}`
    };

    const response = await axiosInstance.get(REFRESH_ROUTE);
    const newAccessToken =
      response &&
      response.data &&
      response.data.data &&
      response.data.data.newAccessToken;

    if (!newAccessToken) throw DEFAULT_TOASTER_MESSAGE;

    setTokenInHeader(newAccessToken);

    return newAccessToken;
  } catch (error) {
    throw error;
  }
}
