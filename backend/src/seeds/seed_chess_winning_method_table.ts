import * as Knex from 'knex';

import { TABLES } from '../constants/tables';
import { CHESS_WINNING_METHODS } from '../constants/fixedModelValues';

/**
 * @export
 * @param {Knex} knex
 * @returns
 */
export function seed(knex: Knex) {
  return knex(TABLES.CHESS_WINNING_METHOD)
    .del()
    .then(() => {
      return Promise.all([
        knex(TABLES.CHESS_WINNING_METHOD).insert([
          {
            id: CHESS_WINNING_METHODS.CHECKMATE.id,
            desc: CHESS_WINNING_METHODS.CHECKMATE.desc
          },
          {
            id: CHESS_WINNING_METHODS.TIME.id,
            desc: CHESS_WINNING_METHODS.TIME.desc
          }
        ])
      ]);
    });
}
