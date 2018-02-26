import { Router } from 'express';

import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import playerRoutes from './playerRoutes';
import userRoleRoutes from './userRoleRoutes';
import categoryRoutes from './categoryRoutes';
import tournamentRoutes from './tournamentRoutes';
import tournamentCateogryRoutes from './tournamentCategoryRoutes';

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

// Load player routes
router.use('/players', playerRoutes);

// Load userRole routes
router.use('/userRoles', userRoleRoutes);

// Load category routes
router.use('/categories', categoryRoutes);

// Load tournament routes
router.use('/tournaments', tournamentRoutes);

// Load tournament category routes
router.use('/tournament-categories', tournamentCateogryRoutes);

export default router;
