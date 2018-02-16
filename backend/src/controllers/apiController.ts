import { Request, Response } from 'express';
import swaggerSpec from '../utils/swagger';

/**
 * Get API docs
 *
 * @param req
 * @param res
 */
export function getAPIList(req: Request, res: Response) {
  res.send(swaggerSpec);
}
