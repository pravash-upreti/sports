import * as Joi from 'joi';

export default {
  desc: Joi.string().alphanum().min(3).max(100).required(),
  season: Joi.number().integer().min(2015).max(2017).required(),
  start_date: Joi.date().required(),
  finish_date: Joi.date(),
  status: Joi.string()
};
