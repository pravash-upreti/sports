import { Request, Response, NextFunction } from 'express';

import * as CategoryService from '../services/categoryService';

/**
 * Create a new category.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function create(req : Request, res : Response, next : NextFunction) {
  try {
    const response = await CategoryService.create(req.body);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};
