import { Router } from 'express';

import * as userValidator from '../../validators/userValidator';
import * as tokenValidator from '../../validators/tokenValidator';
import * as authController from '../../controllers/authController';

const router: Router = Router();

// Authentication management routes
router.post('/login', userValidator.validateUserSchema, authController.login);

router.post('/logout', tokenValidator.validateRefreshToken, authController.logout);

router.get('/refresh', tokenValidator.validateRefreshToken, authController.refreshAccessToken);

export default router;
