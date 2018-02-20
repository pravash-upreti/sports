import { Router } from 'express';

import * as adminController from '../../controllers/adminController';

const router: Router = Router();

// Tournaments
router.get('/', adminController.getAll);
router.post('/login', adminController.handleLogin);


export default router;
