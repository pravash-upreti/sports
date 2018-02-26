import { Router } from 'express';

import * as urlParamsValidator from '../../validators/paramsValidator';
import * as tournamentValidator from '../../validators/tournamentValidator';
import * as tournamentController from '../../controllers/tournamentController';

const router: Router = Router();

// Tournaments
router.get('/', tournamentController.getAll);
router.get('/:id', urlParamsValidator.validateURLParams, tournamentController.get);

router.post('/', tournamentValidator.validateTournamentSchema, tournamentController.create);
router.put('/:id', urlParamsValidator.validateURLParams, tournamentValidator.validateTournamentSchema, tournamentController.update);

router.delete('/:id', urlParamsValidator.validateURLParams, tournamentController.remove);

export default router;
