import axiosInstance from '../../utils/axios';
import { USERS_ROUTE } from '../../constants/apiUrls';

const fetchUsers = async () => {
  try {
    const serverResponse = axiosInstance.get(USERS_ROUTE);
    const fetchedUsers =
      (serverResponse && serverResponse.data && serverResponse.data.data) || [];

    return fetchedUsers;
  } catch (error) {
    throw error;
  }
};

export default fetchUsers;
