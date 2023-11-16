// librerias externas
import express from 'express';
import morgan from 'morgan';

// rutas
import productRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import usersRouters from './routes/user.routes';

import { createUsers } from './libs/initialUsers';
import pkg from '../package.json';

const app = express();
createUsers();

app.set('pkg', pkg);
app.use(express.json());

//middlewares
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
  res.json({
    autor: app.get('pkg').author,
    name: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  });
});

app.use('/products', productRoutes);
app.use('/auth', authRoutes);
app.use('/users', usersRouters);

export default app;