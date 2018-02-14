import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('player', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('first_name', 100).notNullable();
    table.string('middle_name', 100).notNullable();
    table.string('last_name', 100).notNullable();
    table.string('profile_photo', 255).notNullable();

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('player');
}
