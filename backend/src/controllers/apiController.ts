import { Request, Response } from 'express';

import swaggerSpec from '../utils/swagger';

/**
 * Get API docs
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
export function getAPIList(req: Request, res: Response) {
  return res.send(swaggerSpec);
}
