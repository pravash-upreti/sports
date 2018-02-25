import { Router } from 'express';

import * as URLParamsValidator from '../../validators/paramsValidator';
import * as CategoryValidator from '../../validators/categoryValidator';
import * as CategoryController from '../../controllers/categoryController';

const router: Router = Router();

// Categries
router.get('/', CategoryController.getAll);
router.get('/:id', URLParamsValidator.validateURLParams, CategoryController.get);

router.post('/', CategoryValidator.validateCategorySchema, CategoryController.create);
router.put('/:id', URLParamsValidator.validateURLParams, CategoryValidator.validateCategorySchema, CategoryController.update);

router.delete('/:id', URLParamsValidator.validateURLParams, CategoryController.remove);

export default router;
