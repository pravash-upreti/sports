import { Router } from 'express';

const router: Router = Router();

import * as UserValidator from '../../validators/userValidator';
import * as TokenValidator from '../../validators/tokenValidator';

router.post('/login', UserValidator.validateUserSchema);
router.post('/logout', TokenValidator.validateRefreshToken);
router.get('/refresh', TokenValidator.validateRefreshToken);

export default router;
