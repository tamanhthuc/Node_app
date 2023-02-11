"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configCors = void 0;
var configCors = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
};
exports.configCors = configCors;
