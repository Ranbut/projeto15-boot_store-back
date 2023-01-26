import { Router } from 'express';
import { SignUpVerification } from '../middlewares/auth.Middleware.js';
import { signUp } from '../controllers/user.Controllers.js';

const router = Router();

router.post("/signup", SignUpVerification, signUp);

export default router;