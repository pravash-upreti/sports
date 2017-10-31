import { Router } from 'express';

import player from './player';

import * as HomeController from '../controllers/home';

const router: Router = Router();

router.get('/', HomeController.index);

router.use('/players', player);

export default router;
