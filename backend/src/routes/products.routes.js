import { Router } from 'express';
const router = Router();

import { verifyToken } from '../middlewares';
import { getProducts, getProductById } from '../controllers/products.controller';

router.get('/', verifyToken, getProducts);
router.get('/:productId', verifyToken, getProductById);

export default router;