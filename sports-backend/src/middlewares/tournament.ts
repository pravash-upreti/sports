import { Router } from 'express';

import * as TournamentValidator from '../validators/tournament';

const router: Router = Router();

router.post('/', TournamentValidator.validateSchema);

export default router;
