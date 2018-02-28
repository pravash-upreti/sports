import { Router } from 'express';

import * as playerValidator from '../../validators/playerValidator';
import * as urlParamsValidator from '../../validators/paramsValidator';
import * as playerController from '../../controllers/playerController';

const router: Router = Router();

// Player routes
router.get('/', playerController.getAll);

router.get('/:id', urlParamsValidator.validateURLParams, playerController.get);

router.post('/', playerValidator.validatePlayerSchema, playerController.create);

router.delete('/:id', urlParamsValidator.validateURLParams, playerController.remove);

router.put('/:id', urlParamsValidator.validateURLParams, playerValidator.validatePlayerSchema, playerController.update);

export default router;
