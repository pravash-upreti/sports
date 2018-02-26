import { Request, Response, NextFunction } from 'express';

import * as categoryService from '../services/categoryService';

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
    const response = await categoryService.create(req.body);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Get a list of categories.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await categoryService.getAll();

    res.status(response.code).json(response);
  } catch(error) {
    next(error);
  }
}

/**
 * Get a category detail.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function get(req : Request, res : Response, next : NextFunction) {
  try {
    const response = await categoryService.get(req.params.id);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Update a category detail.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function update(req : Request, res : Response, next : NextFunction) {
  try {
    const response = await categoryService.update(req.params.id, req.body);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Remove or delete a category.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await categoryService.remove(req.params.id);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}
