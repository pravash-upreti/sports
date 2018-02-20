import { Router } from 'express';

import tournamentRoutes from './tournamentRoutes';
import adminRoutes from './adminRoutes';

const router: Router = Router();

// Load tournament routes
router.use('/tournaments', tournamentRoutes);
router.use('/admin', adminRoutes);

export default router;
