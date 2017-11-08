import { Router } from 'express';

import * as TournamentValidator from '../validators/tournament';

const router: Router = Router();

router.post('/', TournamentValidator.validateTournamentSchema);
router.post('/:id/categories', TournamentValidator.validateTournamentCategorySchema);

export default router;
