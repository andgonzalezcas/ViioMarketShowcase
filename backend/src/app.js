import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import productRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';

const app = express();

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

export default app;