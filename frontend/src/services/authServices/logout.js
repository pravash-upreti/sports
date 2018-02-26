import { LOGOUT_ROUTE } from '../../constants/apiUrls';

import axiosInstance from '../../utils/axios';
import getAuthDetails from '../../utils/getAuthDetails';

const logout = () => {
  const { refreshToken } = getAuthDetails();

  axiosInstance.defaults.headers = {
    refresh: `Bearer ${refreshToken}`
  };

  return axiosInstance
    .post(LOGOUT_ROUTE)
    .then(
      logoutResponse =>
        (logoutResponse && logoutResponse.data && logoutResponse.data.data) ||
        {}
    )
    .catch(error => {
      throw error;
    });
};

export default logout;
