import { Router } from 'express';

import * as PlayerController from '../controllers/player';

const router: Router = Router();

router.get('/', PlayerController.getPlayers);

router.post('/', PlayerController.addPlayer);

export default router;
