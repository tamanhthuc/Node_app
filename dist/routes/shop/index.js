"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var create_1 = __importDefault(require("../../controller/shop/create"));
var authentication_1 = __importDefault(require("../../middleware/authentication"));
var user_1 = __importDefault(require("../../middleware/user"));
var router = (0, express_1.Router)();
router.post('/create', authentication_1.default, user_1.default, create_1.default);
exports.default = router;
