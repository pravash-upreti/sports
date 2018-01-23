import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('tournament', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('title', 100).notNullable();
    table.date('start_date').notNullable();
    table.date('finish_date').nullable();

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('tournament');
}
