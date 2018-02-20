import { Request, Response, NextFunction } from 'express';

import * as AdminService from '../services/adminService';

/**
 * Get list of all users.
 * 
 * @export
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await AdminService.getAll();
    res.send(response);
  } catch(error) {
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
export async function handleLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await AdminService.handleLogin();
    res.send(response);
  } catch (error) {
    next(error);
  }
}


