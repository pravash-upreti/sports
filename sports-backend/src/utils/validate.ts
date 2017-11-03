import * as Joi from 'joi';

/**
 * @param  {any} data
 * @param  {any} schema
 * @returns any
 */
export default (data: any, schema: Joi.SchemaLike): any => {
  const { error, value } = Joi.validate(data, schema);

  if (error) {
    return {
      'isValid': false,
      'value': error.details[0]
    };
  }

  return {
    'isValid': true,
    'value': value
  };
};
