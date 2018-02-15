import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('chess_winning_method', table => {
    table.increments('id').primary();

    table.string('desc', 50).notNullable();

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('chess_winning_method');
}
