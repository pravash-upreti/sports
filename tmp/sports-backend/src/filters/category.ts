import * as Joi from 'joi';

export default {
  desc: Joi.string().min(3).max(100).required()
};
