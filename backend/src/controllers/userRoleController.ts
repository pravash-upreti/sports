import { Request, Response, NextFunction } from 'express';

import * as userRoleService from '../services/userRoleService';

/**
 * Create a new user role.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function createRole(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await userRoleService.createRole(req.body);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}
