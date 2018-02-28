import axios from 'axios';

import { BASE_URL } from '../constants/apiUrls';

import refreshAccessToken from '../services/authServices/refreshAccessToken';

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

/**
 * Set token in header of our axiosInstance
 *
 * @export
 * @param {string} accessToken
 */
export function setTokenInHeader(accessToken) {
  axiosInstance.defaults.headers = {
    authorization: `Bearer ${accessToken}`
  };
}

/**
 * Refresh token and repeat previous server request
 *
 * @export
 * @param {object} lastRequestConfig
 * @returns {promise}
 * @throws {error}
 */
export async function refreshAndRepeat(lastRequestConfig) {
  try {
    const newAccessToken = await refreshAccessToken();
    if (newAccessToken) {
      lastRequestConfig.headers.authorization = newAccessToken;

      return axiosInstance(lastRequestConfig);
    }

    return null;
  } catch (error) {
    throw error;
  }
}

/**
 * Add interceptor for our axios-responses in case access token is expired.
 *
 * @param {function} localLogout
 * @param {function} getAuthenticationStatus
 */
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
