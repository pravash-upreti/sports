import { Router } from 'express';

import * as userRolecontroller from '../../controllers/userRoleController';

const router: Router = Router();

// UserRole routes
router.post('/', userRolecontroller.createRole);

export default router;
