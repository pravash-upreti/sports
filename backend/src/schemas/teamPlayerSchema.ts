import * as Joi from 'joi';

export const teamPlayerSchema = Joi.object()
  .options({ abortEarly: true })
  .keys({
    team_id: Joi.number()
      .required()
      .label('Team ID'),
    player_id: Joi.number()
      .required()
      .label('Player ID')
  });
