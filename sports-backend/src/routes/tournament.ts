import { Router } from 'express';

import * as TournamentController from '../controllers/tournament';

const router: Router = Router();

router.get('/', TournamentController.getTournaments);

router.post('/', TournamentController.addTournament);

export default router;
