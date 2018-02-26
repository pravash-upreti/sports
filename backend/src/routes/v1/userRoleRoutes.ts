import { Router } from 'express';

import * as tokenValidator from '../../validators/tokenValidator';
import * as userRoleValidator from '../../validators/userRoleValidator';
import * as userRolecontroller from '../../controllers/userRoleController';

const router: Router = Router();

// UserRole routes
router.post('/', userRoleValidator.validateUserRoleSchema, tokenValidator.validateAccessToken, userRolecontroller.createRole);

export default router;
