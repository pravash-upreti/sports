import axiosInstance from '../../utils/axios';
import { USERS_ROUTE } from '../../constants/apiUrls';

const fetchUsers = () => {
  return axiosInstance
    .get(USERS_ROUTE)
    .then((response) => {
      const fetchedUsers = response && response.data && response.data.data;
      
      console.log('fetchedUsers', fetchedUsers);

      return fetchedUsers;
    })
    .catch((error) => {
      console.log('error in fetch users', error);
      
      return null;
    });
};

export default fetchUsers;
