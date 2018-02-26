import axiosInstance from '../../utils/axios';
import { LOGIN_ROUTE } from '../../constants/apiUrls';

const login = loginDetails =>
  axiosInstance
    .post(LOGIN_ROUTE, loginDetails)
    .then(
      loginResponse =>
        (loginResponse && loginResponse.data && loginResponse.data.data) || {}
    )
    .catch(error => {
      throw error;
    });

export default login;
