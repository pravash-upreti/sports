import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('round', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('name', 50).notNullable();
    table.string('desc', 100).notNullable();

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('round');
}
