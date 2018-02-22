import { Router } from 'express';

import userMiddlewares from './userMiddlewares';
import authMiddlewares from './authMiddlewares';
import userRoleMiddlewares from './userRoleMiddlewares';
import categoriesMiddlewares from './categoryMiddlewares';
import tournamentMiddlewares from './tournamentMiddlewares';

const router: Router = Router();

// Load auth middlewares
router.use('/auth', authMiddlewares);

// Load user middlewares
router.use('/users', userMiddlewares);

// Load userRole middlewares
router.use('/userRoles', userRoleMiddlewares);

// Load tournament middlewares
router.use('/categories', categoriesMiddlewares);
router.use('/tournaments', tournamentMiddlewares);

export default router;
