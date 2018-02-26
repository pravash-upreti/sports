import { Request, Response, NextFunction } from 'express';

import * as authService from '../services/authService';

/**
 * Create and send new access token to the user.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function refreshAccessToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token = String(req.headers.refresh).replace('Bearer ', '');
    const response = await authService.refreshAccessToken(res.locals.userInfo, token);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Handle login request of user.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await authService.login(req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Handle logout request of user.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await authService.logout(String(req.headers.refresh));

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}
