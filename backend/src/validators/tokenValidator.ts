import { Request, Response, NextFunction } from 'express';

import ForbiddenError from '../errors/ForbiddenError';
import UnAuthorizedError from '../errors/UnAuthorizedError';

import { tokenMessages } from '../constants/messages';

import * as jwt from '../utils/jwt';

// token stuffs
export function validateAccessToken(req: Request, res: Response, next: NextFunction): void {
  try {
    let token: string = String(req.headers.authorization);
    token = token.replace('Bearer ', '');
    const validationResult: any = jwt.verifyToken(token);
    if (validationResult) {
      next();
    } else {
      next();
    }
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      next(new UnAuthorizedError(tokenMessages.unAuthorized));
    } else if (error.name === 'TokenExpiredError') {
      next(new UnAuthorizedError(tokenMessages.accessTokenExpired));
    } else {
      next(error);
    }
  }
}

export function validateRefreshToken(req: Request, res: Response, next: NextFunction): void {
  try {
    let token: string = String(req.headers.refresh);
    token = token.replace('Bearer ', '');
    const validationResult: any = jwt.verifyToken(String(token));
    if (validationResult) {
      res.locals.userInfo = validationResult.encryptedData;
      next();
    } else {
      next();
    }
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      next(new ForbiddenError(tokenMessages.unAuthorized));
    } else if (error.name === 'TokenExpiredError') {
      next(new ForbiddenError(tokenMessages.refreshTokenExpired));
    } else {
      next(error);
    }
  }
}
