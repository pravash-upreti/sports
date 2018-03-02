import { USERS_ROUTE } from '../../constants/apiUrls';

import axiosInstance from '../../utils/axiosInstance';

/**
 * Fetch Users from server
 *
 * @export
 * @returns {array}
 * @throws {error}
 */
export default async function fetchUsers() {
  try {
    const response = await axiosInstance.get(USERS_ROUTE);

    return (response && response.data && response.data.data) || [];
  } catch (error) {
    throw error;
  }
}
