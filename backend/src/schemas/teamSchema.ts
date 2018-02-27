import * as Joi from 'joi';

export const teamSchema = Joi.object()
  .options({ abortEarly: true })
  .keys({
    name: Joi.string()
      .min(3)
      .max(100)
      .required()
      .label('Team name')
  });
