import { Router } from 'express';

import * as urlParamsValidator from '../../validators/paramsValidator';
import * as tournamentCategoryValidator from '../../validators/tournamentCategoryValidator';
import * as tournamentCategoryController from '../../controllers/tournamentCategoryController';

const router: Router = Router();

// Tournament category routes
router.get('/:id', urlParamsValidator.validateURLParams, tournamentCategoryController.getCategoriesByTournament);

router.post('/', tournamentCategoryValidator.validateTournamentCategorySchema, tournamentCategoryController.create);

export default router;
