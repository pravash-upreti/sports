import { Router } from 'express';

import categoryRoutes from './categoryRoutes';
import tournamentRoutes from './tournamentRoutes';

const router: Router = Router();

// Load tournament routes
router.use('/categories', categoryRoutes);
router.use('/tournaments', tournamentRoutes);

export default router;
