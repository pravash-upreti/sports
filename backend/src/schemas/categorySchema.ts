import * as Joi from 'joi';

export const categorySchema = Joi.object()
  .options({ abortEarly: true })
  .keys({
    desc: Joi.string()
      .min(3)
      .max(100)
      .trim()
      .required()
      .label('Description')
  });
