import { validate } from 'joi';
import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import * as categorySchemas from '../schemas/categorySchema';

/**
 * Validate a category post or put object.
 *
 * @param req
 * @param res
 * @param next
 */
export function validateCategorySchema(req: Request, res: Response, next: NextFunction) {
  const result = validate(req.body, categorySchemas.categorySchema);

  if (result.error) {
    res.status(HttpStatus.BAD_REQUEST).json(result.error);

    return;
  }

  next();
}
