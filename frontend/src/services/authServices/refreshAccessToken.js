import { REFRESH_ROUTE } from '../../constants/apiUrls';

import getAuthDetails from '../../utils/getAuthDetails';
import axiosInstance, { setTokenInHeader } from '../../utils/axios';

const refreshAccessToken = async () => {
  try {
    const { refreshToken } = getAuthDetails();
    axiosInstance.defaults.headers = {
      refresh: `Bearer ${refreshToken}`
    };

    const serverResponse = await axiosInstance.get(REFRESH_ROUTE);
    const newAccessToken =
      serverResponse &&
      serverResponse.data &&
      serverResponse.data.data &&
      serverResponse.data.data.newAccessToken;

    setTokenInHeader(newAccessToken);

    return newAccessToken;
  } catch (error) {
    throw error;
  }
};

export default refreshAccessToken;
