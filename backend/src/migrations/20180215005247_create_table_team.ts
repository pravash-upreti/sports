import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('team', table => {
    table.increments('id').primary();

    table.string('name', 100).notNullable();

    table
      .integer('team_id')
      .unsigned()
      .references('tournament.id')
      .nullable();

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('team');
}
