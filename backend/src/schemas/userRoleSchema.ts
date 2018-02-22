import * as Joi from 'joi';

export const userRoleSchema = Joi.object()
  .options({ abortEarly: true })
  .keys({
    desc: Joi.string()
      .min(3)
      .max(50)
      .required()
  });
