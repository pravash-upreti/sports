import * as Joi from 'joi';

export default {
  title: Joi.string().min(3).max(100).required(),
  season: Joi.number().integer().min(2014).max(2017).required(),
  start_date: Joi.date().required(),
  finish_date: Joi.date()
};
