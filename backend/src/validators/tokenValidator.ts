import { Request, Response, NextFunction } from 'express';

import UnAuthorizedError from '../errors/UnAuthorizedError';
import ForbiddenError from '../errors/ForbiddenError';

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
    // res.send(validationResult);
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
    const validationResult = jwt.verifyToken(String(token));
    if (validationResult) {
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
