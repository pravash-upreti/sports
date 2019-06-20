import Knex from 'knex';

export interface Context {
  jwt?: String;
  db: Knex;
}
