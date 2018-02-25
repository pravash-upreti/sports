import { Router } from 'express';
import * as URLParamsValidator from '../../validators/paramsValidator';
import * as TournamentValidator from '../../validators/tournamentValidator';
import * as tournamentController from '../../controllers/tournamentController';

const router: Router = Router();

// Tournaments
router.get('/', tournamentController.getAll);
router.get('/:id', URLParamsValidator.validateURLParams, tournamentController.get);

router.post('/', TournamentValidator.validateTournamentSchema, tournamentController.create);
router.put('/:id', URLParamsValidator.validateURLParams, TournamentValidator.validateTournamentSchema, tournamentController.update);

router.delete('/:id', URLParamsValidator.validateURLParams, tournamentController.remove);

export default router;
