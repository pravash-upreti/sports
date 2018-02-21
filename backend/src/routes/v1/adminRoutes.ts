import { Router } from 'express';

import * as adminController from '../../controllers/adminController';

const router: Router = Router();

// admin routes
router.get('/users', adminController.getAllUsers);
router.get('/refresh', adminController.refreshAccessToken);
router.post('/login', adminController.handleLogin);
router.post('/logout', adminController.handleLogout);

export default router;
