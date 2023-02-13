import { Router } from "express";
import createShopController from "../../controller/shop/create";
import authenticationMiddleware from "../../middleware/authentication";
import userMiddleware from "../../middleware/user";

const router = Router();

router.post('/create', authenticationMiddleware, userMiddleware, createShopController);

export default router;