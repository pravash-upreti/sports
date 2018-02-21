import { Request, Response, NextFunction } from 'express';

import * as UserService from '../services/userService';

/**
 * Get list of all users.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await UserService.getAll();
    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Create a new user.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await UserService.create(req.body);
    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

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
    const response = await UserService.createRole(req.body);
    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}
