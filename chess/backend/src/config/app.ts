import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const contents: string = fs.readFileSync('./package.json', { encoding: 'utf8' });
const { name, version } = JSON.parse(contents);

export default {
  name,
  version,
  host: process.env.APP_HOST,
  port: process.env.NODE_ENV === 'test' ? process.env.TEST_APP_PORT : process.env.APP_PORT,
  pagination: {
    page: 1,
    maxRows: 20
  }
};
