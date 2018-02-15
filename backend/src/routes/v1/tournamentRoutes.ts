import { Router } from 'express';

import * as tournamentController from '../../controllers/tournamentController';

const router: Router = Router();

// Tournaments
router.get('/', tournamentController.getAll);
router.post('/', tournamentController.create);
router.get('/:id', tournamentController.get);

export default router;
