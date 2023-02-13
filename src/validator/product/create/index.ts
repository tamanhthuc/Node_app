import { body } from "express-validator";
import { Price } from "../../../types/model/shared/Price";

export const createProductValidator = [
  body('name').not().isEmpty().trim().withMessage('Name of product is required'),
  body('quantity').isNumeric().withMessage("Quantity must be a number")
  .custom((quantity: number, {req}) => {
    if (quantity <= 0) {
      return Promise.reject("Product quantity must be greater than 0");
    }
    return true;
  }),
  body('price').custom((price: Price, {req}) => {
    const { original_price, discount_price } = price || {};
    if (!original_price) {
      return Promise.reject("Product must have a price");
    }
    if (discount_price && original_price === discount_price) {
      return Promise.reject("Discount price must be lower than original price");
    }
    return true;
  })
];
