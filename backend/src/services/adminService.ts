import { Collection } from 'bookshelf';
import * as HttpStatus from 'http-status-codes';

import { userMessages } from '../constants/messages';

import LoginData from '../domain/LoginData';

import User from '../models/user';
import UserRole from '../models/userRole';
import UnAuthorizedError from '../errors/UnAuthorizedError';

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
    const user = await new User({email}).fetch();
    if (password === user.attributes.password) {
      return {
        code: HttpStatus.OK,
        data: user,
        status: HttpStatus.getStatusText(HttpStatus.OK)
      };
    }
    throw new UnAuthorizedError(userMessages.unAuthorized);
  } catch(error) {
    throw(error);
  }
}

/**
 * Retch list of all users
 * 
 * @export
 * @returns {string}
 * @throws {error}
 */
export async function getAll() {
  try {
    const userList: Collection<User> = await new User().fetchAll();
    const userRole: Collection<UserRole> = await new UserRole().fetchAll();
    return {
      code: HttpStatus.OK,
      data: { userList, userRole },
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw (error);
  }
}
