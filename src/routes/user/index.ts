import { Router } from "express";
import getInfoUserController from "../../controller/user/get-info";
import authenticationMiddleware from "../../middleware/authentication";
import userMiddleware from "../../middleware/user";

const router = Router();

router.get('/get-info', authenticationMiddleware, userMiddleware, getInfoUserController);

export default router;
