import { Router } from 'express';

const router: Router = Router();

import v1Middlewares from './v1/index';

// Load v1 middlewares
router.use('/api/v1', v1Middlewares);

export default router;
