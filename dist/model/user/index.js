"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
    },
    username: {
        type: String
    },
    otp: {
        type: Number
    },
    validated: {
        type: Boolean,
        default: false
    }
});
exports.UserModel = (0, mongoose_1.model)('user', UserSchema);
