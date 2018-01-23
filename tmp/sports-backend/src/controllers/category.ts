import { Request, Response } from 'express';

import * as CategoryService from '../services/category';

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryService.getAllCategories();

    res.json(categories);
  } catch (ex) {
    res.json(ex);
  }
};

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let addCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.addCategory(req.body);

    res.json(category);
  } catch (ex) {
    res.json(ex);
  }
};
