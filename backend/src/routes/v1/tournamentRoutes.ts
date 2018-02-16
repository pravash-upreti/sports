import { Router } from 'express';

import * as tournamentController from '../../controllers/tournamentController';

const router: Router = Router();

// Tournaments
router.get('/', tournamentController.getAll);
router.get('/:id', tournamentController.get);
router.post('/', tournamentController.create);
router.put('/:id', tournamentController.update);
router.delete('/:id', tournamentController.remove);

export default router;
