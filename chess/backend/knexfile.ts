import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env'
});

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'src/migrations',
      tableName: 'knex_migrations',
      stub: 'src/stubs/migration.stub'
    },
    seeds: {
      directory: 'src/seeds',
      stub: 'src/stubs/seed.stub'
    }
  },
  production: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'src/migrations',
      tableName: 'knex_migrations'
    }
  },
  test: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.TEST_DB_NAME,
      user: process.env.TEST_DB_USERNAME,
      password: process.env.TEST_DB_PASSWORD
    },
    migrations: {
      directory: 'src/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: 'src/seeds'
    }
  }
};
