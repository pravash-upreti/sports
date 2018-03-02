import { Router } from 'express';

import * as urlParamsValidator from '../../validators/paramsValidator';
import * as chessFixtureValidator from '../../validators/chessFixtureValidator';
import * as chessFixtureController from '../../controllers/chessFixtureController';

const router: Router = Router();

// Player routes
router.get('/:id', urlParamsValidator.validateURLParams, chessFixtureController.get);

router.delete('/:id', urlParamsValidator.validateURLParams, chessFixtureController.remove);

router.post('/', chessFixtureValidator.validateChessFixtureSchema, chessFixtureController.create);

router.put('/:id', urlParamsValidator.validateURLParams, chessFixtureValidator.validateChessFixtureSchema, chessFixtureController.update);

export default router;
