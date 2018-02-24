import axios from 'axios';

import { BASE_URL } from '../constants/apiUrls';

import refreshAccessToken from '../services/authServices/refreshAccessToken';

let axiosInstance = axios.create({
  baseURL: BASE_URL
});

export function setTokenInHeader(accessToken) {
  axiosInstance.defaults.headers = {
    authorization: 'Bearer ' + accessToken
  };

  return;
}

export function refreshAndRepeat(lastRequestConfig) {
  return refreshAccessToken()
    .then((newAccessToken) => {
      if (newAccessToken) {
        lastRequestConfig.headers.authorization = newAccessToken;

        return axiosInstance(lastRequestConfig);
      }

      return null;
    })
    .catch((error) => {
      console.log('error in refresh and repeat', error);

      return null;
    });
}

export function addInterceptor(localLogout) {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        let lastRequestConfig = error.response.config;

        return refreshAndRepeat(lastRequestConfig);
      } else if (error.response.status === 403) {
        console.log('forcing logout');
        localLogout();
        
        return null;
      } else {
        console.log('error caught in interceptor', error.response);
        
        return error.response;
      }
    });
}

export default axiosInstance;
