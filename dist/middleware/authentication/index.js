"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var jwt_1 = require("../../constants/jwt");
var response_1 = require("../../response");
var authenticationMiddleware = function (req, res, next) {
    var _a;
    try {
        var authenticateInfo = req.headers['authorization'];
        if (!authenticateInfo) {
            return res.status(403).json(new response_1.ResponseEntity({
                code: 403,
                message: "Unauthenticated",
            }));
        }
        var token = (_a = authenticateInfo.split('Bearer ')) === null || _a === void 0 ? void 0 : _a[1];
        if (!token) {
            return res.status(403).json(new response_1.ResponseEntity({
                code: 403,
                message: "Unauthenticated",
            }));
        }
        try {
            var decoded = (0, jsonwebtoken_1.verify)(token, jwt_1.KEY_GENERATE_TOKEN);
            req.user = decoded;
        }
        catch (err) {
            return res.status(401).json(new response_1.ResponseEntity({
                code: 401,
                message: 'Token is not valid'
            }));
        }
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.default = authenticationMiddleware;
