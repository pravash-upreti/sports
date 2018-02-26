import { Router } from 'express';

import * as urlParamsValidator from '../../validators/paramsValidator';
import * as categoryValidator from '../../validators/categoryValidator';
import * as categoryController from '../../controllers/categoryController';

const router: Router = Router();

// Categries
router.get('/', categoryController.getAll);
router.get('/:id', urlParamsValidator.validateURLParams, categoryController.get);

router.post('/', categoryValidator.validateCategorySchema, categoryController.create);
router.put('/:id', urlParamsValidator.validateURLParams, categoryValidator.validateCategorySchema, categoryController.update);

router.delete('/:id', urlParamsValidator.validateURLParams, categoryController.remove);

export default router;
