import { Router } from 'express';

const router: Router = Router();

import * as UserValidator from '../../validators/userValidator';
import * as TokenValidator from '../../validators/tokenValidator';

router.get('/users', TokenValidator.validateAccessToken);
router.get('/refresh', TokenValidator.validateRefreshToken);
router.post('/login', UserValidator.validateUserSchema);
router.post('/logout', TokenValidator.validateRefreshToken);

export default router;
