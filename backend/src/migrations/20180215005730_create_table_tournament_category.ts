import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('tournament_category', table => {
    table.increments('id').primary();

    table
      .integer('tournament_id')
      .unsigned()
      .references('tournament.id')
      .nullable();

    table
      .integer('category_id')
      .unsigned()
      .references('category.id')
      .nullable();

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('tournament_category');
}
