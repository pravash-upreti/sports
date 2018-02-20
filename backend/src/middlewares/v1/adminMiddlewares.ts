import { Router } from 'express';

const router: Router = Router();

import * as UserValidator from '../../validators/userValidator';

router.post('/login', UserValidator.validateUserSchema);

export default router;
