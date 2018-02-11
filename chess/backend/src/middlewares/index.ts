import { Router } from 'express';

const router: Router = Router();

import * as TournamentValidator from '../validators/tournament';
import * as URLParamsValidator from '../validators/paramsValidator';

router.get('/tournaments/:id', URLParamsValidator.validateURLParams);
router.post('/tournaments', TournamentValidator.validateTournamentSchema);

export default router;
