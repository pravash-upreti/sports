import { Collection } from 'bookshelf';
import * as HttpStatus from 'http-status-codes';

import NewUserData from '../domain/NewUserData';
import { userMessages } from '../constants/messages';

import User from '../models/user';
import UserRole from '../models/userRole';
import NoRowUpdatedError from '../errors/NoRowUpdatedError';

/**
 * Fetch list of all users
 *
 * @export
 * @returns {Collection<Tournament>}
 * @throws {error}
 */
export async function getAll() {
  try {
    const userList: Collection<any> = await User.fetchAll();
    const userRole: Collection<UserRole> = await new UserRole().fetchAll();

    return {
      code: HttpStatus.OK,
      data: { userList, userRole },
      message: userMessages.fetched,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Create a new user.
 *
 * @export
 * @param {object} params
 * @returns {User}
 * @throws {error}
 */
export async function create(params: NewUserData) {
  try {
    const newUser = await new User(params).save();

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
    throw error;
  }
}
