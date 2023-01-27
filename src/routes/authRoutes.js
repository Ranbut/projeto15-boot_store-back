import { Router } from 'express';
import { SignUpVerification, SignInVerification } from '../middlewares/auth.Middleware.js';
import { signUp, signIn } from '../controllers/user.Controllers.js';

const router = Router();

router.post("/signup", SignUpVerification, signUp);
router.post("/signin", SignInVerification, signIn);

export default router;