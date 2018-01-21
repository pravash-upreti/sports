import * as Knex from 'knex';

const isTestEnvironment = process.env.NODE_ENV === 'test';

const config = {
  client: process.env.DB_CLIENT,
  connection: {
    charset: 'utf8',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: isTestEnvironment ? process.env.TEST_DB_NAME : process.env.DB_NAME,
    user: isTestEnvironment ? process.env.TEST_DB_USERNAME : process.env.DB_USERNAME,
    password: isTestEnvironment ? process.env.TEST_DB_PASSWORD : process.env.DB_PASSWORD
  }
};

/**
 * Database connection.
 */
export default Knex(config);
