"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var response_1 = require("../../response");
var validatorMiddleware = function (req, res, next) {
    try {
        var validate = (0, express_validator_1.validationResult)(req);
        if (validate.isEmpty()) {
            return next();
        }
        var errors = validate.array();
        return res.json(new response_1.ResponseEntity({
            code: 422,
            message: errors[0].msg,
            data: errors,
        }));
    }
    catch (err) {
        next(err);
    }
};
exports.default = validatorMiddleware;
