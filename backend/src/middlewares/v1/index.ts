import { Router } from 'express';

import userMiddlewares from './userMiddlewares';
import adminMiddlewares from './adminMiddlewares';
import tournamentMiddlewares from './tournamentMiddlewares';

const router: Router = Router();

// Load user middlewares
router.use('/users', userMiddlewares);

// Load admin middlewares
router.use('/admin', adminMiddlewares);

// Load tournament middlewares
router.use('/tournaments', tournamentMiddlewares);

export default router;
