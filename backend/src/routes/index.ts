import { Router } from 'express';

import v1Routes from './v1';

import * as homeController from '../controllers/homeController';

const router: Router = Router();

router.get('/', homeController.index);

// Load v1 routes
router.use('/api/v1', v1Routes);

export default router;
