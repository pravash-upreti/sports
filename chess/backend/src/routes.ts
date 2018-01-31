import { Router } from 'express';

import * as homeController from './controllers/home';
import * as tournamentController from './controllers/tournament';

const router: Router = Router();

router.get('/', homeController.index);

// Tournaments
router.get('/tournaments', tournamentController.getAll);
router.post('/tournaments', tournamentController.create);

router.get('/tournaments/:id', tournamentController.get);

export default router;
