import { Router } from "express";
import registerController from "../../controller/auth/register";
import validatorMiddleware from "../../middleware/validator";
import { registerValidator } from "../../validator/auth/register";

const router = Router();

router.post('/register', registerValidator, validatorMiddleware, registerController);

export default router;
