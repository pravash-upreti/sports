import { Request, Response, NextFunction } from 'express';

import * as userService from '../services/userService';

/**
 * Get list of all users.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await userService.getAll();

    return res.status(response.code).json(response);
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
 * @returns
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await userService.create(req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}
