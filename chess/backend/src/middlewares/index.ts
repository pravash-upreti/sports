import { Router } from 'express';

const router: Router = Router();

import * as TournamentValidator from '../validators/tournament';

router.post('/tournaments', TournamentValidator.validateTournamentSchema);

export default router;
