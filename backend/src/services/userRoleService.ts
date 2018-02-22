import * as HttpStatus from 'http-status-codes';

import NewUserData from '../domain/NewUserData';
import { userRoleMessages } from '../constants/messages';

import UserRole from '../models/userRole';
import NoRowUpdatedError from '../errors/NoRowUpdatedError';

/**
 * Create a new user_role.
 *
 * @export
 * @param {object} params
 * @returns {UserRole}
 * @throws {error}
 */
export async function createRole(params: NewUserData) {
  try {
    const newUserRole = await new UserRole(params).save();

    if (!newUserRole) {
      throw new NoRowUpdatedError(userRoleMessages.unableToCreate);
    }

    return {
      data: newUserRole,
      code: HttpStatus.CREATED,
      message: userRoleMessages.created,
      status: HttpStatus.getStatusText(HttpStatus.CREATED)
    };
  } catch (error) {
    throw error;
  }
}
