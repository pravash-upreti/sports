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

// Load category routes
router.use('/categories', categoryRoutes);

// Load tournament routes
router.use('/tournaments', tournamentRoutes);

export default router;
