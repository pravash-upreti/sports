import { Router, Request, Response, NextFunction } from 'express';

import HTTP_STATUS_CONSTANTS from '../utils/http_status';

import * as TournamentController from '../controllers/tournament';

const router: Router = Router();

router.get('/', TournamentController.getTournaments);

router.post('/', TournamentController.addTournament);

router.get('/:id', TournamentController.getTournament);

router.get('/:id/categories', TournamentController.getTournamentCategories);
router.post('/:id/categories', TournamentController.addTournamentCategory);

// router.post('/categories');

export default router;
