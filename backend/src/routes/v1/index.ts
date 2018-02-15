import { Router } from 'express';

import tournamentRoutes from './tournamentRoutes';

const router: Router = Router();

// Load tournament routes
router.use('/tournaments', tournamentRoutes);

export default router;
