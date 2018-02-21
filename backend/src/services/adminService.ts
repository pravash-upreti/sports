import { Collection } from 'bookshelf';
import * as HttpStatus from 'http-status-codes';

import { userMessages } from '../constants/messages';
import { tokenMessages } from '../constants/messages';

import LoginData from '../domain/LoginData';

import * as jwt from '../utils/jwt';

import ForbiddenError from '../errors/ForbiddenError';
import UnAuthorizedError from '../errors/UnAuthorizedError';

import User from '../models/user';
import UserRole from '../models/userRole';

/**
 * Retch list of all users
 *
 * @export
 * @returns {string}
 * @throws {error}
 */
export async function getAllUsers() {
  try {
    const userList: Collection<User> = await new User().fetchAll();
    const userRole: Collection<UserRole> = await new UserRole().fetchAll();

    return {
      code: HttpStatus.OK,
      data: { userList, userRole },
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Retch list of all users
 *
 * @export
 * @returns {Collection<Tournament>}
 * @throws {error}
 */
export async function handleLogin(loginData: LoginData) {
  try {
    const email = loginData.email;
    const password = loginData.password;
    const user = await new User({ email }).fetch();

    if (user && password === user.attributes.password) {
      const userId = user.attributes.id;
      const tokens = jwt.generateTokens({ email, password, userId });

      return {
        code: HttpStatus.OK,
        data: {
          tokens
        },
        status: HttpStatus.getStatusText(HttpStatus.OK)
      };
    }

    throw new UnAuthorizedError(userMessages.unAuthorized);
  } catch (error) {
    throw error;
  }
}

export async function refreshAccessToken(token: string) {
  try {
    token = token.replace('Bearer ', '');
    const validationResult: any = jwt.verifyToken(token);
    const newAccessToken = jwt.generateAccessToken(validationResult.encryptedData);

    return {
      code: HttpStatus.OK,
      data: {
        newAccessToken
      },
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      throw new ForbiddenError(tokenMessages.unAuthorized);
    } else if (error.name === 'TokenExpiredError') {
      throw new ForbiddenError(tokenMessages.refreshTokenExpired);
    } else {
      throw error;
    }
  }
}
