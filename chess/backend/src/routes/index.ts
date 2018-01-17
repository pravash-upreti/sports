import { Router, Request, Response } from 'express';

import * as HomeController from '../controllers/home';

const router: Router = Router();

router.get('/', HomeController.index);

export default router;
