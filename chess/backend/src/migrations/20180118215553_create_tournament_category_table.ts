import * as Knex from 'knex';

exports.up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable('tournament_category', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.integer('tournament_id').notNullable().unsigned().references('tournament.id');
    table.integer('category_id').notNullable().unsigned().references('category.id');

    table.timestamps(true, true);
});

};

exports.down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTable('tournament_category');
};
