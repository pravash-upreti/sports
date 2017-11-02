import { Router } from 'express';

import player from './player';
import season from './season';
import category from './category';
import tournament from './tournament';

import * as HomeController from '../controllers/home';

const router: Router = Router();

router.get('/', HomeController.index);

router.use('/players', player);
router.use('/seasons', season);
router.use('/categories', category);
router.use('/tournaments', tournament);

export default router;
