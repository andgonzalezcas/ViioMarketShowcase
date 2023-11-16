import { Router } from 'express';
const router = Router();

import { verifyToken } from '../middlewares';
import { getUsers } from '../controllers/user.controller';

router.get('/', verifyToken, getUsers);

export default router;