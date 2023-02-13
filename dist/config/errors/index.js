"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("../../response");
var errorHandlingController = function (err, req, res, next) {
    try {
        var message = (err === null || err === void 0 ? void 0 : err.message) || "Server Internal Error";
        var code = (err === null || err === void 0 ? void 0 : err.code) || 500;
        res.json(new response_1.ResponseEntity({
            code: code,
            message: message
        }));
    }
    catch (err) {
        next(err);
    }
};
exports.default = errorHandlingController;
