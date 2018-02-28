import { LOGIN_ROUTE } from '../../constants/apiUrls';

import axiosInstance from '../../utils/axiosInstance';

/**
 * Login to the server
 *
 * @export
 * @param {object} loginDetails
 * @returns {object}
 * @throws {error}
 */
export default async function login(loginDetails) {
  try {
    const response = await axiosInstance.post(LOGIN_ROUTE, loginDetails);

    return (response && response.data && response.data.data) || {};
  } catch (error) {
    throw error;
  }
}
