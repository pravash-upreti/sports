import { Router } from 'express';

const router: Router = Router();

import tournamentMiddlewares from './tournamentMiddlewares';
import adminMiddlewares from './adminMiddlewares';

// Load tournament middlewares
router.use('/tournaments', tournamentMiddlewares);

router.use('/admin', adminMiddlewares);

export default router;
