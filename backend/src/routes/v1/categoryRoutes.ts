import { Router } from 'express';

import * as CategoryController from '../../controllers/categoryController';

const router:Router = Router();

// Categries
router.get('/', CategoryController.getAll);
router.post('/', CategoryController.create);

export default router;
