import { Router } from 'express';
import { signin, signup } from '../controllers/auth.controller';
import { checkDuplicateEmail, checkDuplicateUsername } from '../middlewares';

const router = Router();

router.post('/signin', signin);
router.post('/signup', [checkDuplicateUsername, checkDuplicateEmail], signup);

export default router;