import { Router } from 'express';
const router = Router();

import { verifyToken } from '../middlewares'
import { getProducts, getProductById } from '../controllers/products.controller';

router.get('/', verifyToken, getProducts);
// router.post('/', createProduct);
router.get('/:productId', verifyToken, getProductById);
// router.put('/:productId', updateProductById);
// router.delete('/:productId', deleteProductById);

export default router;