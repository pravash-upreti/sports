import * as Joi from 'joi';

export const playerSchema = Joi.object()
  .options({ abortEarly: true })
  .keys({
    first_name: Joi.string()
      .min(3)
      .max(100)
      .required()
      .label('First name'),
    middle_name: Joi.string()
      .min(3)
      .max(100)
      .label('Middle name'),
    last_name: Joi.string()
      .min(3)
      .max(100)
      .required()
      .label('Last name'),
    profile_photo: Joi.string()
      .required()
      .label('Profile photo path')
  });
