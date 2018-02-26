import axios from 'axios';

import { BASE_URL } from '../constants/apiUrls';

import refreshAccessToken from '../services/authServices/refreshAccessToken';

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export function setTokenInHeader(accessToken) {
  axiosInstance.defaults.headers = {
    authorization: `Bearer ${accessToken}`
  };
}

export function refreshAndRepeat(lastRequestConfig) {
  return refreshAccessToken()
    .then(newAccessToken => {
      if (newAccessToken) {
        lastRequestConfig.headers.authorization = newAccessToken;

        return axiosInstance(lastRequestConfig);
      }

      return null;
    })
    .catch(error => {
      throw error;
    });
}

export function addInterceptor(localLogout, getAuthenticationStatus) {
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        if (!getAuthenticationStatus()) {
          throw error.response.data;
        }

        const lastRequestConfig = error.response.config;

        return refreshAndRepeat(lastRequestConfig);
      } else if (error.response.status === 403) {
        localLogout();

        return null;
      }
      throw error.response.data;
    }
  );
}

export default axiosInstance;
