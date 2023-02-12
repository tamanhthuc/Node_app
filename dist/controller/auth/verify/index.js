"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("../../../response");
var verifyController = function (req, res, next) {
    try {
        res.json(new response_1.ResponseEntity({
            code: 200,
            message: 'OK'
        }));
    }
    catch (err) {
        next(err);
    }
};
exports.default = verifyController;
