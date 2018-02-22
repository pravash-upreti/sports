import { Request, Response, NextFunction } from 'express';

import * as AuthService from '../services/authService';

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
    const response = await AuthService.refreshAccessToken(res.locals.userInfo, token);

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
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await AuthService.login(req.body);

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
export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await AuthService.logout(String(req.headers.refresh));

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}
