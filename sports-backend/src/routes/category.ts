import { Router } from 'express';

import * as CategoryController from '../controllers/category';

const router: Router = Router();

router.get('/', CategoryController.getCategories);
router.post('/', CategoryController.addCategory);

export default router;
