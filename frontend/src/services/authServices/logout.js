import axiosInstance from '../../utils/axios';
import { LOGOUT_ROUTE } from '../../constants/apiUrls';

const logout = () => {
  const { refreshToken } = JSON.parse(localStorage.sportSessionDetails);

  axiosInstance.defaults.headers = {
    refresh: 'Bearer ' + refreshToken
  };

  return axiosInstance
    .post(LOGOUT_ROUTE)
    .then((logoutResponse) => {
      return logoutResponse && logoutResponse.data && logoutResponse.data.data;
    })
    .catch((error) => {
      console.log('logout error is', error);
      
      return null;
    });
};

export default logout;
