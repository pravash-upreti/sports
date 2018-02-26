import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
export function index(req: Request, res: Response) {
  return res.status(HttpStatus.OK).json({
    name: req.app.locals.name,
    version: req.app.locals.version
  });
}
