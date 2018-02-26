import axiosInstance from '../../utils/axios';
import { USERS_ROUTE } from '../../constants/apiUrls';

const fetchUsers = () => {
  return axiosInstance
    .get(USERS_ROUTE)
    .then((response) => {
      const fetchedUsers = response && response.data && response.data.data || [];
      
      return fetchedUsers;
    })
    .catch((error) => {
      throw error;
    });
};

export default fetchUsers;
