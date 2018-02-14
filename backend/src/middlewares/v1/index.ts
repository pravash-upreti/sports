import { Router } from 'express';

const router: Router = Router();

import tournamentMiddlewares from './tournamentMiddlewares';

// Load tournament middlewares
router.use('/tournaments', tournamentMiddlewares);

export default router;
