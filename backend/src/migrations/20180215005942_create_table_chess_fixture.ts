import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('chess_fixture', table => {
    table.increments('id').primary();

    table
      .integer('team_1_id')
      .unsigned()
      .references('team.id')
      .nullable();

    table
      .integer('team_2_id')
      .unsigned()
      .references('team.id')
      .nullable();

    table
      .integer('winner_team_id')
      .unsigned()
      .references('team.id')
      .nullable();

    table
      .integer('round_id')
      .unsigned()
      .references('round.id')
      .notNullable();

    table
      .integer('winning_method_id')
      .unsigned()
      .references('chess_winning_method.id')
      .nullable();

    table
      .integer('status_id')
      .unsigned()
      .references('fixture_status.id')
      .notNullable();

    table
      .integer('tournament_category_id')
      .unsigned()
      .references('tournament_category.id')
      .notNullable();

    table.date('fixture_date').notNullable();

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('chess_fixture');
}
