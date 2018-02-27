import { Router } from 'express';

import * as urlParamsValidator from '../../validators/paramsValidator';
import * as chessFixtureValidator from '../../validators/chessFixtureValidator';
import * as chessFixtureController from '../../controllers/chessFixtureController';

const router: Router = Router();

// Player routes
// router.get('/', chessFixtureController.getAll);

router.get('/:id', urlParamsValidator.validateURLParams, chessFixtureController.get);

router.post('/', chessFixtureValidator.validateChessFixtureSchema, chessFixtureController.create);

// router.delete('/:id', urlParamsValidator.validateURLParams, chessFixtureController.remove);

// router.put('/:id', urlParamsValidator.validateURLParams, playerValidator.validatePlayerSchema, chessFixtureController.update);

export default router;
