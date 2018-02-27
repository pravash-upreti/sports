import * as Joi from 'joi';

export const tournamentCategorySchema = Joi.object()
  .options({ abortEarly: true })
  .keys({
    tournament_id: Joi.number()
      .required()
      .label('Tournament ID'),
    category_id: Joi.number()
      .required()
      .label('Category ID')
  });
