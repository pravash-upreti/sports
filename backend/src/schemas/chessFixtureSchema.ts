import * as Joi from 'joi';

export const chessFixtureSchema = Joi.object()
  .options({ abortEarly: true })
  .keys({
    player_1_id: Joi.number()
      .label('First player'),
    player_2_id: Joi.number()
      .label('Second player'),
    round_id: Joi.number()
      .required()
      .label('Round'),
    status_id: Joi.number()
      .required()
      .label('Fixture Status'),
    fixture_date: Joi.date()
      .required()
      .label('Fixture Date'),
    winner_player_id: Joi.number()
      .label('Winner player'),
    winning_method_id: Joi.number()
      .label('Winning Method'),
    tournament_category_id: Joi.number()
      .required()
      .label('Tournament Cateogry')
  });
