import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.table('player', table => {
    table
      .string('middle_name', 100)
      .nullable()
      .alter();
  });
}

export function down(knex: Knex) {
  return knex.schema.table('user', table => {
    table.string('middle_name', 100).notNullable();
  });
}
