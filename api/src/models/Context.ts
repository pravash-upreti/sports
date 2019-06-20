import Knex from 'knex';

interface Context {
  jwt?: String;
  db: Knex;
}

export default Context;
