import { Router, Request, Response, NextFunction } from 'express';

import HTTP_STATUS_CONSTANTS from '../utils/http_status';

import validate from '../utils/validate';
import validationSchema from '../filters/category';

const router: Router = Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  const result = validate(req.body, validationSchema);

  if (result.isValid) {
    next();
  }

  res.status(HTTP_STATUS_CONSTANTS.BAD_REQUEST).json(result.value);
});

export default router;
