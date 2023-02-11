"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.configMail = void 0;
var mail_1 = __importDefault(require("@sendgrid/mail"));
var configMail = function () {
    mail_1.default.setApiKey(process.env.SENDGRID_API);
};
exports.configMail = configMail;
var sendMail = function (props) {
    // @ts-ignore
    var msg = __assign({ from: process.env.ADMIN_EMAIL }, props);
    return mail_1.default.send(msg);
};
exports.sendMail = sendMail;
