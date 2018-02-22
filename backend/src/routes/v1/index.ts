import { Router } from 'express';

import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import userRoleRoutes from './userRoleRoutes';
import categoryRoutes from './categoryRoutes';
import tournamentRoutes from './tournamentRoutes';

const router: Router = Router();

router.get('/', (req, res) => {
  res.json({
    title: process.env.APP_NAME,
    version: process.env.APP_VERSION
  });
});

// Load auth routes
router.use('/auth', authRoutes);

// Load user routes
router.use('/users', userRoutes);

// Load userRole routes
router.use('/userRoles', userRoleRoutes);

// Load tournament routes
router.use('/categories', categoryRoutes);
router.use('/tournaments', tournamentRoutes);

export default router;
