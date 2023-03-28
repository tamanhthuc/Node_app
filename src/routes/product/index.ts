import { Router } from "express";
import createProductController from "../../controller/product/create";
import authenticationMiddleware from "../../middleware/authentication";
import userMiddleware from "../../middleware/user";
import validatorMiddleware from "../../middleware/validator";
import { createProductValidator } from "../../validator/product/create";
import gelAllProductController from "../../controller/product/getList";

const router = Router();

router.post(
  "/create",
  authenticationMiddleware,
  userMiddleware,
  createProductValidator,
  validatorMiddleware,
  createProductController
);

router.post("/listing", gelAllProductController)

export default router;
