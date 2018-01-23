import { Router } from 'express';

import player from './player';
import season from './season';
import category from './category';
import tournament from './tournament';
import tableTennis from './table_tennis';

import * as HomeController from '../controllers/home';

const router: Router = Router();

router.get('/', HomeController.index);

router.use('/tt', tableTennis);
router.use('/players', player);
router.use('/seasons', season);
router.use('/categories', category);
router.use('/tournaments', tournament);

export default router;
