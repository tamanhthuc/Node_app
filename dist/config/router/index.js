"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
var auth_1 = __importDefault(require("../../routes/auth"));
var user_1 = __importDefault(require("../../routes/user"));
var product_1 = __importDefault(require("../../routes/product"));
var shop_1 = __importDefault(require("../../routes/shop"));
exports.AppRouter = [
    {
        path: '/api/auth',
        router: auth_1.default
    },
    {
        path: '/api/user',
        router: user_1.default
    },
    {
        path: '/api/product',
        router: product_1.default
    },
    {
        path: '/api/shop',
        router: shop_1.default
    }
];
