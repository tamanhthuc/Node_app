import { Router } from "express";
import loginController from "../../controller/auth/login";
import registerController from "../../controller/auth/register";
import validatorMiddleware from "../../middleware/validator";
import { loginValidator } from "../../validator/auth/login";
import { registerValidator } from "../../validator/auth/register";

const router = Router();

router.post('/register', registerValidator, validatorMiddleware, registerController);

router.post('/login', loginValidator, validatorMiddleware, loginController);

export default router;
