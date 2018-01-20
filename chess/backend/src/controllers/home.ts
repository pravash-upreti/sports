import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';

import app from '../config/app';

export function index(req: Request, res: Response) {
  res.status(HttpStatus.OK).json({ name: app.name, version: app.version });
}
