import * as HttpStatus from 'http-status-codes';

import LoginData from '../domain/LoginData';
import EncryptionData from '../domain/EncryptionData';

import { userMessages } from '../constants/messages';
import { tokenMessages } from '../constants/messages';

import * as jwt from '../utils/jwt';

import User from '../models/user';
import ForbiddenError from '../errors/ForbiddenError';
import UnAuthorizedError from '../errors/UnAuthorizedError';

import * as tokenService from './tokenService';

/**
 * Create tokens for valid user login and store refresh token in database
 *
 * @export
 * @param {LoginData} loginData
 * @returns {object}
 * @throws {error}
 */
export async function login(loginData: LoginData) {
  try {
    const email = loginData.email;
    const password = loginData.password;
    const user = await new User({ email }).fetch();

    if (user && user.attributes && password === user.attributes.password) {
      const userId = user.attributes.id;
      const tokens = jwt.generateTokens({ email, password, userId });

      await tokenService.addRefreshToken(tokens.refreshToken, userId);

      return {
        data: { tokens },
        code: HttpStatus.OK,
        message: userMessages.loggedIn,
        status: HttpStatus.getStatusText(HttpStatus.OK)
      };
    }

    throw new UnAuthorizedError(userMessages.invalidUserInfo);
  } catch (error) {
    throw error;
  }
}

/**
 * Generate new access token for valid refresh token
 *
 * @export
 * @param {string} token
 * @returns {string}
 * @throws {error}
 */
export async function refreshAccessToken(userInfo: EncryptionData, token: string) {
  try {
    // check if refresh token is still in database(i.e. user hasn't logged out)
    const fetchedRefreshToken = await tokenService.getRefreshTokenByValue(token);

    if (fetchedRefreshToken) {
      const newAccessToken = jwt.generateAccessToken(userInfo);

      return {
        code: HttpStatus.OK,
        data: { newAccessToken },
        message: tokenMessages.tokenRefreshed,
        status: HttpStatus.getStatusText(HttpStatus.OK)
      };
    }

    throw new ForbiddenError(tokenMessages.invalidToken);
  } catch (error) {
    throw error;
  }
}

/**
 * Remove refresh token of the user if it exists and respond accordingly.
 *
 * @export
 * @param {string} refreshToken
 * @returns {object}
 * @throws {error}
 */
export async function logout(refreshToken: string) {
  try {
    refreshToken = refreshToken.replace('Bearer ', '');

    const removedToken = await tokenService.removeRefreshToken(refreshToken);

    if (!removedToken) {
      throw new ForbiddenError(tokenMessages.invalidToken);
    }

    return {
      data: {},
      code: HttpStatus.OK,
      message: userMessages.loggedOut,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw error;
  }
}
