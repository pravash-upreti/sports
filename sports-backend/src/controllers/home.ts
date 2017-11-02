import { Request, Response } from 'express';

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let index = (req: Request, res: Response) => {
  res.json({
    data: 'This is awesome'
  });
};
