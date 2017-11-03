import { Router } from 'express';

import tournament from './tournament';

const router: Router = Router();

router.use('/tournaments', tournament);

export default router;
