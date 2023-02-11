"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
var auth_1 = __importDefault(require("../../routes/auth"));
exports.AppRouter = [
    {
        path: '/api/auth',
        router: auth_1.default
    }
];
