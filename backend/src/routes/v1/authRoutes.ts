import { Router } from 'express';

import * as authController from '../../controllers/authController';

const router: Router = Router();

// authentication management routes
router.get('/refresh', authController.refreshAccessToken);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

export default router;
