import { Router } from 'express';

import * as authController from '../../controllers/authController';

const router: Router = Router();

// authentication management routes
router.get('/refresh', authController.refreshAccessToken);
router.post('/login', authController.handleLogin);
router.post('/logout', authController.handleLogout);

export default router;
