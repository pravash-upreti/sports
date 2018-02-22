import { Router } from 'express';

import * as CategoryController from '../../controllers/categoryController';

const router:Router = Router();

// Categries
router.get('/:id', CategoryController.get);
router.get('/', CategoryController.getAll);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);

export default router;
