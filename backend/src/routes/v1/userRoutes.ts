import { Router } from 'express';

import * as userController from '../../controllers/userController';

const router: Router = Router();

// Tournaments
router.get('/', userController.getAll);
router.post('/', userController.create);

export default router;
