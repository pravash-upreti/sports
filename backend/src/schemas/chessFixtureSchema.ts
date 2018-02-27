import * as Joi from 'joi';

export const chessFixtureSchema = Joi.object()
  .options({ abortEarly: true })
  .keys({
    team_1_id: Joi.number()
      .label('First Team'),
    team_2_id: Joi.number()
      .label('Second Team'),
    round_id: Joi.number()
      .required()
      .label('Round'),
    status_id: Joi.number()
      .required()
      .label('Fixture Status'),
    fixture_date: Joi.date()
      .required()
      .label('Fixture Date'),
    winner_team_id: Joi.number()
      .label('Winner Team'),
    winning_method_id: Joi.number()
      .label('Winning Method'),
    tournament_category_id: Joi.number()
      .required()
      .label('Tournament Cateogry')
  });
