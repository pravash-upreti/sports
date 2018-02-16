import { Router } from 'express';

import v1Routes from './v1';

import * as apiController from '../controllers/apiController';

const router: Router = Router();

router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.name,
    apiVersion: req.app.locals.version
  });
});

// Swagger docs
router.get('/swagger.json', apiController.getAPIList);

// Load v1 routes
router.use('/api/v1', v1Routes);

export default router;
