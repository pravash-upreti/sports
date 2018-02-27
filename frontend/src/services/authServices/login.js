import axiosInstance from '../../utils/axios';
import { LOGIN_ROUTE } from '../../constants/apiUrls';

const login = async loginDetails => {
  try {
    const loginResponse = await axiosInstance.post(LOGIN_ROUTE, loginDetails);

    return (
      (loginResponse && loginResponse.data && loginResponse.data.data) || {}
    );
  } catch (error) {
    throw error;
  }
};

export default login;
