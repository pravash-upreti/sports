import { Request, Response, NextFunction } from 'express';

import ForbiddenError from '../errors/ForbiddenError';
import UnAuthorizedError from '../errors/UnAuthorizedError';

import { tokenMessages } from '../constants/messages';
import { tokenErrorNames } from '../constants/errors';

import * as jwt from '../utils/jwt';

/**
 * Validate access token of the user.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function validateAccessToken(req: Request, res: Response, next: NextFunction): void {
  try {
    let token: string = String(req.headers.authorization);
    token = token.replace('Bearer ', '');
    jwt.verifyToken(token);

    next();
  } catch (error) {
    if (error.name === tokenErrorNames.jwtError) {
      next(new UnAuthorizedError(tokenMessages.invalidToken));
    } else if (error.name === tokenErrorNames.tokenExpiredError) {
      next(new UnAuthorizedError(tokenMessages.accessTokenExpired));
    } else {
      next(error);
    }
  }
}

/**
 * Validate refresh token of the user.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function validateRefreshToken(req: Request, res: Response, next: NextFunction): void {
  try {
    let token: string = String(req.headers.refresh);
    token = token.replace('Bearer ', '');
    const validationResult: any = jwt.verifyToken(String(token));

    res.locals.userInfo = validationResult.encryptedData;

    next();
  } catch (error) {
    if (error.name === tokenErrorNames.jwtError) {
      next(new ForbiddenError(tokenMessages.invalidToken));
    } else if (error.name === tokenErrorNames.tokenExpiredError) {
      next(new ForbiddenError(tokenMessages.refreshTokenExpired));
    } else {
      next(error);
    }
  }
}
