// librerias externas
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { swaggerSpec, swaggerUi } from './swagger'

// rutas
import productRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import usersRouters from './routes/user.routes';

import { createUsers } from './libs/initialUsers';
import pkg from '../package.json';

const app = express();
app.use(cors());
createUsers();

// Configurar Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.set('pkg', pkg);
app.use(express.json());

//middlewares
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
  res.json({
    response: {
      autor: app.get('pkg').author,
      name: app.get('pkg').name,
      description: app.get('pkg').description,
      version: app.get('pkg').version,
    },
    success: true
  });
});

app.use('/products', productRoutes);
app.use('/auth', authRoutes);
app.use('/users', usersRouters);

export default app;