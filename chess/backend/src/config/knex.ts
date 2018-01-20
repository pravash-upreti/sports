import * as Knex from 'knex';

const isTestEnvironment = process.env.NODE_ENV === 'test';

const config = {
  client: isTestEnvironment ? process.env.DB_CLIENT : process.env.DB_CLIENT,
  connection: {
    charset: 'utf8',
    user: isTestEnvironment ? process.env.TEST_DB_USER : process.env.DB_USER,
    port: isTestEnvironment ? process.env.TEST_DB_PORT : process.env.DB_PORT,
    database: isTestEnvironment ? process.env.TEST_DB_NAME : process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
  }
};

/**
 * Database connection.
 */
export default Knex(config);
