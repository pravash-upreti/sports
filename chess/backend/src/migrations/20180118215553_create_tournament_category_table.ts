import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('tournament_category', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('tournament_id')
      .notNullable()
      .unsigned()
      .references('tournament.id');
    table
      .integer('category_id')
      .notNullable()
      .unsigned()
      .references('category.id');

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('tournament_category');
}
