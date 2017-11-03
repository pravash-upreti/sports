import { Router } from 'express';

import category from './category';
import tournament from './tournament';

const router: Router = Router();

router.use('/categories', category);
router.use('/tournaments', tournament);

export default router;
