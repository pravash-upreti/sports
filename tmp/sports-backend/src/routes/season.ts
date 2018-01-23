import { Router } from 'express';

import * as SeasonController from '../controllers/season';

const router: Router = Router();

router.get('/', SeasonController.getSeasons);

router.post('/', SeasonController.addSeason);

export default router;
