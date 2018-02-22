import { Router } from 'express';

const router: Router = Router();

import categoriesMiddlewares from './categoryMiddlewares';
import tournamentMiddlewares from './tournamentMiddlewares';

// Load tournament middlewares
router.use('/categories', categoriesMiddlewares);
router.use('/tournaments', tournamentMiddlewares);

export default router;
