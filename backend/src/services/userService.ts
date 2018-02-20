import { Collection } from 'bookshelf';
import * as HttpStatus from 'http-status-codes';

import { userMessages } from '../constants/messages';

import User from '../models/user';
import UserRole from '../models/userRole';
import NoRowUpdatedError from '../errors/NotFoundError';

/**
 * Retch list of all users
 * 
 * @export
 * @returns {Collection<Tournament>}
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

/**
 * Create a new user.
 * 
 * @export
 * @param {object} params
 * @returns {User}
 * 
 */
export async function create(params: object) {
  try {
    const newUser = 'testing ';

    if (!newUser) {
      throw new NoRowUpdatedError(userMessages.unableToCreate);
    }

    return {
      data: newUser,
      code: HttpStatus.CREATED,
      message: userMessages.created,
      status: HttpStatus.getStatusText(HttpStatus.CREATED)
    };

  } catch (error) {
    throw (error);
  }
}
