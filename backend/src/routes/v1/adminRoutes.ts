import { Router } from 'express';

import * as adminController from '../../controllers/adminController';

const router: Router = Router();

// admin routes
router.get('/', adminController.getAllUsers);
router.post('/login', adminController.handleLogin);


export default router;
