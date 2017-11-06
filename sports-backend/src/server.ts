import * as dotenv from 'dotenv';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import routes from './routes';
import middlewares from './middlewares';

dotenv.config({
  path: '.env'
});

const app: express.Application = express();
const port: number = parseInt(process.env.APP_PORT, 10) || 5000;

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', middlewares);
app.use('/', routes);

app.listen(app.get('port'));
