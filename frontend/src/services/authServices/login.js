import axiosInstance from '../../utils/axios';
import { LOGIN_ROUTE } from '../../constants/apiUrls';

const login = (loginDetails) => {
  return axiosInstance
    .post(LOGIN_ROUTE, loginDetails)
    .then((loginResponse) => {
      return loginResponse && loginResponse.data && loginResponse.data.data || {};
    })
    .catch((error) => {
      throw error;
    });
};

export default login;
