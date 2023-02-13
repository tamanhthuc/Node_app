"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductValidator = void 0;
var express_validator_1 = require("express-validator");
exports.createProductValidator = [
    (0, express_validator_1.body)('name').not().isEmpty().trim().withMessage('Name of product is required'),
    (0, express_validator_1.body)('quantity').isNumeric().withMessage("Quantity must be a number")
        .custom(function (quantity, _a) {
        var req = _a.req;
        if (quantity <= 0) {
            return Promise.reject("Product quantity must be greater than 0");
        }
        return true;
    }),
    (0, express_validator_1.body)('price').custom(function (price, _a) {
        var req = _a.req;
        var _b = price || {}, original_price = _b.original_price, discount_price = _b.discount_price;
        if (!original_price) {
            return Promise.reject("Product must have a price");
        }
        if (discount_price && original_price === discount_price) {
            return Promise.reject("Discount price must be lower than original price");
        }
        return true;
    })
];
