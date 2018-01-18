import * as Knex from 'knex';

exports.up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable('match', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.integer('player_1_id').notNullable().unsigned().references('tournament_category_player.id');
    table.integer('player_2_id').notNullable().unsigned().references('tournament_category_player.id');
    table.integer('winner_player_id').notNullable().unsigned().references('tournament_category_player.id');
    table.string('won_by', 100).nullable();
    table.dateTime('date').nullable();
    table.integer('round_id').notNullable().unsigned().references('round.id');
    table.integer('tournament_id').notNullable().unsigned().references('tournament.id');

    table.timestamps(true, true);
  });
};

exports.down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTable('match');
};
