// exception : For this package, always extract in this way
import * as path from 'path';
import swaggerJSDoc = require('swagger-jsdoc');

/**
 * Swagger definition.
 */
const definition = {
  info: {
    title: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    description: process.env.APP_DESCRIPTION
  },
  host: `${process.env.APP_HOST}:${process.env.APP_PORT}`,
  basePath: '/api'
};

/**
 * Options for the swagger docs.
 */
const options = {
  // import swaggerDefinitions
  swaggerDefinition: definition,
  // path to the API docs
  apis: [
    path.join(__dirname, '/../../src/docs/*.js'),
    path.join(__dirname, '/../../src/docs/*.yml'),
    path.join(__dirname, '/../../src/docs/*.yaml')
  ]
};

/**
 * Initialize swagger-jsdoc.
 */
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
