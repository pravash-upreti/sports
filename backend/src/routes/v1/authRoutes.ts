import { Router } from 'express';

import * as UserValidator from '../../validators/userValidator';
import * as TokenValidator from '../../validators/tokenValidator';
import * as authController from '../../controllers/authController';

const router: Router = Router();

// Authentication management routes
router.get('/refresh', TokenValidator.validateRefreshToken, authController.refreshAccessToken);

router.post('/login', UserValidator.validateUserSchema, authController.login);
router.post('/logout', TokenValidator.validateRefreshToken, authController.logout);

export default router;
