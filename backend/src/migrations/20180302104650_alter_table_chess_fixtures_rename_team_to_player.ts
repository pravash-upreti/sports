import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.table('chess_fixture', table => {
    table.dropColumn('team_1_id');
    table.dropColumn('team_2_id');
    table.dropColumn('winner_team_id');

    table
      .integer('player_1_id')
      .unsigned()
      .references('player.id')
      .nullable()
      .onDelete('CASCADE');

    table
      .integer('player_2_id')
      .unsigned()
      .references('player.id')
      .nullable()
      .onDelete('CASCADE');

    table
      .integer('winner_player_id')
      .unsigned()
      .references('player.id')
      .nullable()
      .onDelete('CASCADE');
  });
}

export function down(knex: Knex) {
  return knex.schema.table('chess_fixture', table => {
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

    table.dropColumn('player_1_id');
    table.dropColumn('player_2_id');
    table.dropColumn('winner_player_id');
  });
}
