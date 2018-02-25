import { Router } from 'express';

import * as UserValidator from '../../validators/userValidator';
import * as TokenValidator from '../../validators/tokenValidator';
import * as userController from '../../controllers/userController';

const router: Router = Router();

// User routes
router.get('/', TokenValidator.validateAccessToken, userController.getAll);

router.post('/', UserValidator.validateUserSchema, TokenValidator.validateAccessToken, userController.create);

export default router;
