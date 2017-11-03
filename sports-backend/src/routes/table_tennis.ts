import { Router } from 'express';

import * as TableTennisController from '../controllers/table_tennis';

const router: Router = Router();

router.get('/', TableTennisController.getMatches);
router.post('/', TableTennisController.addMatch);

export default router;
