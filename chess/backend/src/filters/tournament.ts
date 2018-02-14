import * as Joi from 'joi';

export const tournamentSchema = Joi.object()
  .options({ abortEarly: true })
  .keys({
    title: Joi.string()
      .min(3)
      .max(100)
      .required(),
    start_date: Joi.date().required(),
    finish_date: Joi.date()
  });
