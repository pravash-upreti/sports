import { Collection } from 'bookshelf';
import * as HttpStatus from 'http-status-codes';

import NewUserData from '../domain/NewUserData';

import { userMessages } from '../constants/messages';

import User from '../models/user';
import UserRole from '../models/userRole';
import NoRowUpdatedError from '../errors/NoRowUpdatedError';

/**
 * Retch list of all users
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
 *
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

/**
 * Create a new user_role.
 *
 * @export
 * @param {object} params
 * @returns {UserRole}
 *
 */
export async function createRole(params: NewUserData) {
  try {
    const newUserRole = await new UserRole(params).save();
    if (!newUserRole) {
      throw new NoRowUpdatedError(userMessages.unableToCreate);
    }

    return {
      data: newUserRole,
      code: HttpStatus.CREATED,
      message: userMessages.created,
      status: HttpStatus.getStatusText(HttpStatus.CREATED)
    };
  } catch (error) {
    throw error;
  }
}
