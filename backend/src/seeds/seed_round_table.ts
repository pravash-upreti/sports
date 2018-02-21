import * as Knex from 'knex';

import { TABLES } from '../constants/tables';
import { ROUNDS } from '../constants/fixedModelValues';

/**
 * @export
 * @param {Knex} knex
 * @returns
 */
export function seed(knex: Knex) {
  return knex(TABLES.ROUND)
    .del()
    .then(() => {
      return Promise.all([
        knex(TABLES.ROUND).insert([
          {
            id: ROUNDS.FINAL.id,
            name: ROUNDS.FINAL.name,
            desc: ROUNDS.FINAL.desc
          },
          {
            id: ROUNDS.SEMI_FINAL.id,
            name: ROUNDS.SEMI_FINAL.name,
            desc: ROUNDS.SEMI_FINAL.desc
          },
          {
            id: ROUNDS.QUARTER_FINAL.id,
            name: ROUNDS.QUARTER_FINAL.name,
            desc: ROUNDS.QUARTER_FINAL.desc
          },
          {
            id: ROUNDS.PRE_QUARTER_FINAL.id,
            name: ROUNDS.PRE_QUARTER_FINAL.name,
            desc: ROUNDS.PRE_QUARTER_FINAL.desc
          },
          {
            id: ROUNDS.ROUND_OF_32.id,
            name: ROUNDS.ROUND_OF_32.name,
            desc: ROUNDS.ROUND_OF_32.desc
          },
          {
            id: ROUNDS.PLAY_OFFS.id,
            name: ROUNDS.PLAY_OFFS.name,
            desc: ROUNDS.PLAY_OFFS.desc
          }
        ])
      ]);
    });
}
