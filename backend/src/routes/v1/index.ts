import { Router } from 'express';

import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';
import tournamentRoutes from './tournamentRoutes';

const router: Router = Router();

// Load tournament routes
router.use('/users', userRoutes);
router.use('/admin', adminRoutes);
router.use('/tournaments', tournamentRoutes);

export default router;
