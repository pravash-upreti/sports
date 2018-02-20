import { Collection } from 'bookshelf';
import * as HttpStatus from 'http-status-codes';

import User from '../models/user';
import UserRole from '../models/userRole';

/**
 * Retch list of all users
 * 
 * @export
 * @returns {Collection<Tournament>}
 * @throws {error}
 */
export async function handleLogin() {
  try {
    return {
      code: HttpStatus.OK,
      data: 'you requested login',
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
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
