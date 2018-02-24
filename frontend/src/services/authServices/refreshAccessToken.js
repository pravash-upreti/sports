import { REFRESH_ROUTE } from '../../constants/apiUrls';
import axiosInstance, { setTokenInHeader } from '../../utils/axios';

const refreshAccessToken = () => {
  const { refreshToken } = JSON.parse(localStorage.sportSessionDetails);

  axiosInstance.defaults.headers = {
    refresh: 'Bearer ' + refreshToken
  };

  return axiosInstance
    .get(REFRESH_ROUTE)
    .then((response) => {
      const newAccessToken = response && response.data && response.data.data && response.data.data.newAccessToken;
      
      setTokenInHeader(newAccessToken);
      
      return newAccessToken;
    })
    .catch((error) => {
      console.log('error from refresh', error);

      return null;
    })
};

export default refreshAccessToken;
