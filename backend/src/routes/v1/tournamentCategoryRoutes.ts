import { Router } from 'express';

import * as urlParamsValidator from '../../validators/paramsValidator';
import * as tournamentCategoryValidator from '../../validators/tournamentCategoryValidator';
import * as tournamentCategoryController from '../../controllers/tournamentCategoryController';

const router: Router = Router();

// Tournament category routes
router.delete('/:id', urlParamsValidator.validateURLParams, tournamentCategoryController.remove);

router.post('/', tournamentCategoryValidator.validateTournamentCategorySchema, tournamentCategoryController.create);

router.get('/:tournamentId', urlParamsValidator.validateURLParams, tournamentCategoryController.getCategoriesByTournament);

router.put('/:id', urlParamsValidator.validateURLParams, tournamentCategoryValidator.validateTournamentCategorySchema, tournamentCategoryController.update);

export default router;
