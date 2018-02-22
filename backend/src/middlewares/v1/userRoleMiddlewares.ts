import { Router } from 'express';

const router: Router = Router();

import * as TokenValidator from '../../validators/tokenValidator';
import * as UserRoleValidator from '../../validators/userRoleValidator';

router.post('/', UserRoleValidator.validateUserRoleSchema, TokenValidator.validateAccessToken);

export default router;
