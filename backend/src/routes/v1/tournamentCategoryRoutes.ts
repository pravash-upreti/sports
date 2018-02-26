import { Router } from 'express';

import * as tournamentCategoryValidator from '../../validators/tournamentCategoryValidator';
import * as tournamentCategoryController from '../../controllers/tournamentCategoryController';

const router: Router = Router();

// Tournament category routes
router.post('/', tournamentCategoryValidator.validateTournamentCategorySchema, tournamentCategoryController.create);

export default router;
