"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var create_1 = __importDefault(require("../../controller/product/create"));
var authentication_1 = __importDefault(require("../../middleware/authentication"));
var user_1 = __importDefault(require("../../middleware/user"));
var validator_1 = __importDefault(require("../../middleware/validator"));
var create_2 = require("../../validator/product/create");
var getList_1 = __importDefault(require("../../controller/product/getList"));
var router = (0, express_1.Router)();
router.post("/create", authentication_1.default, user_1.default, create_2.createProductValidator, validator_1.default, create_1.default);
router.post("/listing", getList_1.default);
exports.default = router;
