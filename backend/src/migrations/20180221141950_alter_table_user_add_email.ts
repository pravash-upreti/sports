import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.table('user', table => {
    table
      .string('email', 100)
      .notNullable()
      .unique();
  });
}

export function down(knex: Knex) {
  return knex.schema.table('user', table => {
    table.dropColumn('email');
  });
}
