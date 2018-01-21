import * as cors from 'cors';
import * as helmet from 'helmet';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import routes from './routes';
import config from './config/app';
import notFoundHandler from './middlewares/notFoundHandler';
import genericErrorHandler from './middlewares/genericErrorHandler';

const { port } = config;
const app: express.Application = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.use(genericErrorHandler);
app.use(notFoundHandler);

app.listen(port);

export default app;
