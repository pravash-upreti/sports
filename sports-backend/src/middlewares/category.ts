import { Router } from 'express';

import * as CategoryValidator from '../validators/category';

const router: Router = Router();

router.post('/', CategoryValidator.validateSchema);

export default router;
