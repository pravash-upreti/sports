import { Router } from 'express';

const router: Router = Router();

import * as URLParamsValidator from '../../validators/paramsValidator';
import * as CategoryValidator from '../../validators/categoryValidator';

router.get('/:id', URLParamsValidator.validateURLParams);
// router.delete('/:id', URLParamsValidator.validateURLParams);
router.post('/', CategoryValidator.validateCategorySchema);
// router.put('/:id', URLParamsValidator.validateURLParams, TournamentValidator.validateTournamentSchema);

export default router;
