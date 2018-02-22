import { Request, Response, NextFunction } from 'express';

import * as UserService from '../services/userService';
import * as AdminService from '../services/adminService';

/**
 * Get list of all users.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await UserService.getAll();

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Create and send new access token to the user
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function refreshAccessToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token = String(req.headers.refresh).replace('Bearer ', '');
    const response = await AdminService.refreshAccessToken(res.locals.userInfo, token);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Handle login request of user
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function handleLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await AdminService.handleLogin(req.body);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Handle logout request of user
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function handleLogout(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await AdminService.handleLogout(String(req.headers.refresh));

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}
