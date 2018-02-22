import { Router } from 'express';

import * as CategoryController from '../../controllers/categoryController';

const router:Router = Router();

// Categries
router.post('/', CategoryController.create);

export default router;
