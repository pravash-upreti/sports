import * as Joi from 'joi';

export const userSchema = Joi.object()
  .options({ abortEarly: true })
  .keys({
    email: Joi.string()
      .min(3)
      .max(100)
      .required(),
    password: Joi.string()
      .min(4)
      .max(100)
      .required()
  });
