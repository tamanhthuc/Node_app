"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ShopModel = new mongoose_1.Schema({
    owner: {
        type: mongoose_1.Types.ObjectId,
        unique: true,
        required: true,
        ref: 'user'
    },
    time_creation: {
        type: Number,
        default: Date.now(),
        required: true
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('shop', ShopModel);
