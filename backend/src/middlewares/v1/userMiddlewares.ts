import { Router } from 'express';

const router: Router = Router();

import * as UserValidator from '../../validators/userValidator';
import * as TokenValidator from '../../validators/tokenValidator';

router.get('/', TokenValidator.validateAccessToken);
router.post('/', UserValidator.validateUserSchema, TokenValidator.validateAccessToken);
router.post('/roles', UserValidator.validateUserRoleSchema, TokenValidator.validateAccessToken);

export default router;
