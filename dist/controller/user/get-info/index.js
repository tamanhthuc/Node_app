"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("../../../response");
var getInfoUserController = function (req, res, next) {
    try {
        var user = req === null || req === void 0 ? void 0 : req.userInfo;
        console.log(user);
        if (!user) {
            return res.status(404).json(new response_1.ResponseEntity({
                code: 404,
                message: "User is not existed"
            }));
        }
        ;
        res.json(new response_1.ResponseEntity({
            code: 200,
            message: 'OK',
            data: user
        }));
    }
    catch (err) {
        next(err);
    }
};
exports.default = getInfoUserController;
