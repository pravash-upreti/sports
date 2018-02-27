import { LOGOUT_ROUTE } from '../../constants/apiUrls';

import axiosInstance from '../../utils/axios';
import getAuthDetails from '../../utils/getAuthDetails';

const logout = async () => {
  const { refreshToken } = getAuthDetails();

  axiosInstance.defaults.headers = {
    refresh: `Bearer ${refreshToken}`
  };

  try {
    const logoutResponse = await axiosInstance.post(LOGOUT_ROUTE);

    return (
      (logoutResponse && logoutResponse.data && logoutResponse.data.data) || {}
    );
  } catch (error) {
    throw error;
  }
};

export default logout;
