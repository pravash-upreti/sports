import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.table('user', table => {
    table
      .string('email', 100)
      .notNullable()
      .unique()
      .alter();
  });
}

export function down(knex: Knex) {
  return knex.schema.table('user', table => {
    table.string('email', 100)
      .notNullable()
      .alter();
  });
}
