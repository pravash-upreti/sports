import { Router } from 'express';

import * as urlParamsValidator from '../../validators/paramsValidator';
import * as teamPlayerValidator from '../../validators/teamPlayerValidator';
import * as teamPlayerController from '../../controllers/teamPlayerController';

const router: Router = Router();

// Team routes
router.get('/', teamPlayerController.getAll);

router.get('/:id', urlParamsValidator.validateURLParams, teamPlayerController.get);

router.post('/', teamPlayerValidator.validateTeamSchema, teamPlayerController.create);

router.delete('/:id', urlParamsValidator.validateURLParams, teamPlayerController.remove);

router.put('/:id', urlParamsValidator.validateURLParams, teamPlayerValidator.validateTeamSchema, teamPlayerController.update);

export default router;
