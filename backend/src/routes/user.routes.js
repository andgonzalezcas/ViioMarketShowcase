import { Router } from 'express';
const router = Router();

import { verifyToken } from '../middlewares';
import { getUserByToken, getUsers } from '../controllers/user.controller';

router.get('/', verifyToken, getUsers);
router.get('/byToken', verifyToken, getUserByToken)

export default router;