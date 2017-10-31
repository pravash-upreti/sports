import * as path from 'path';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import routes from './routes';

dotenv.config({
  path: '.env'
});

const app: express.Application = express();
const port: number = parseInt(process.env.APP_PORT) || 5000;

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('Press Ctrl+C to stop\n');
});
