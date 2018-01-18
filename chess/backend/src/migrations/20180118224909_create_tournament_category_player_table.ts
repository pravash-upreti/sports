import * as Knex from 'knex';

exports.up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable('tournament_category_player', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.integer('tournament_category_id').notNullable().unsigned().references('tournament_category.id');
    table.integer('player_id').notNullable().unsigned().references('player.id');

    table.timestamps(true, true);
  });
};

exports.down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTable('tournament_category_player');
};
