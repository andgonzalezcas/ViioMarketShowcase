import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'viio market showcase api',
      version: '1.0.0',
      description: 'Api creada para presentar prueba tecnica para viio',
    },
  },
  apis: ['./routes/*.js', './models/*.js', './controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default {
  swaggerSpec,
  swaggerUi,
};
