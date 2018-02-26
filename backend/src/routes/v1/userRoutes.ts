import { Router } from 'express';

import * as userValidator from '../../validators/userValidator';
import * as tokenValidator from '../../validators/tokenValidator';
import * as userController from '../../controllers/userController';

const router: Router = Router();

// User routes
router.get('/', tokenValidator.validateAccessToken, userController.getAll);

router.post('/', userValidator.validateUserSchema, tokenValidator.validateAccessToken, userController.create);

export default router;
