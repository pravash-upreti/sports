import { REFRESH_ROUTE } from '../../constants/apiUrls';

import getAuthDetails from '../../utils/getAuthDetails';
import axiosInstance, { setTokenInHeader } from '../../utils/axios';

const refreshAccessToken = () => {
  try {
    const { refreshToken } = getAuthDetails();
    axiosInstance.defaults.headers = {
      refresh: `Bearer ${refreshToken}`
    };

    return axiosInstance
      .get(REFRESH_ROUTE)
      .then(response => {
        const newAccessToken =
          response &&
          response.data &&
          response.data.data &&
          response.data.data.newAccessToken;

        setTokenInHeader(newAccessToken);

        return newAccessToken;
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    throw error;
  }
};

export default refreshAccessToken;
