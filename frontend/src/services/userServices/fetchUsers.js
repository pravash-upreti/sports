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
    const fetchedUsers =
      (response && response.data && response.data.data) || [];

    return fetchedUsers;
  } catch (error) {
    throw error;
  }
}
