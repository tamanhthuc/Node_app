"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var login_1 = __importDefault(require("../../controller/auth/login"));
var register_1 = __importDefault(require("../../controller/auth/register"));
var verify_1 = __importDefault(require("../../controller/auth/verify"));
var validator_1 = __importDefault(require("../../middleware/validator"));
var login_2 = require("../../validator/auth/login");
var register_2 = require("../../validator/auth/register");
var verify_2 = require("../../validator/auth/verify");
var router = (0, express_1.Router)();
router.post('/register', register_2.registerValidator, validator_1.default, register_1.default);
router.post('/login', login_2.loginValidator, validator_1.default, login_1.default);
router.post('/verify', verify_2.verifyValidator, validator_1.default, verify_1.default);
exports.default = router;
