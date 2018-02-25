import {Router} from 'express';

import * as TokenValidator from '../../validators/tokenValidator';
import * as UserRoleValidator from '../../validators/userRoleValidator';
import * as userRolecontroller from '../../controllers/userRoleController';

const router : Router = Router();

// UserRole routes
router.post('/', UserRoleValidator.validateUserRoleSchema, TokenValidator.validateAccessToken, userRolecontroller.createRole);

export default router;
