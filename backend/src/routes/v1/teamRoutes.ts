import { Router } from 'express';

import * as teamValidator from '../../validators/teamValidator';
import * as teamController from '../../controllers/teamController';
import * as urlParamsValidator from '../../validators/paramsValidator';

const router: Router = Router();

// Team routes
router.get('/', teamController.getAll);

router.post('/', teamValidator.validateTeamSchema, teamController.create);

router.get('/:id', urlParamsValidator.validateURLParams, teamController.get);

router.delete('/:id', urlParamsValidator.validateURLParams, teamController.remove);

router.put('/:id', urlParamsValidator.validateURLParams, teamValidator.validateTeamSchema, teamController.update);

export default router;
