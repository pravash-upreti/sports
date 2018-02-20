import { Router } from 'express';

const router: Router = Router();

import * as UserValidator from '../../validators/userValidator';

router.post('/', UserValidator.validateUserSchema);
router.post('/roles', UserValidator.validateUserRoleSchema);

export default router;
