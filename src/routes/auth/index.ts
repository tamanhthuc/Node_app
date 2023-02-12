import { Router } from "express";
import loginController from "../../controller/auth/login";
import registerController from "../../controller/auth/register";
import verifyController from "../../controller/auth/verify";
import validatorMiddleware from "../../middleware/validator";
import { loginValidator } from "../../validator/auth/login";
import { registerValidator } from "../../validator/auth/register";
import { verifyValidator } from "../../validator/auth/verify";

const router = Router();

router.post('/register', registerValidator, validatorMiddleware, registerController);

router.post('/login', loginValidator, validatorMiddleware, loginController);

router.post('/verify', verifyValidator, validatorMiddleware, verifyController);

export default router;
