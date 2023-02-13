"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProductModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    like: {
        type: Number,
        required: true,
        default: 0
    },
    num_buy: {
        type: Number,
        required: true,
        default: 0
    },
    time_creation: {
        type: Number,
        required: true,
        default: Date.now()
    },
    price: {
        discount_price: {
            type: Number
        },
        original_price: {
            type: Number,
            required: true
        }
    },
    reviews: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: 'review'
        }
    ],
    media_urls: [
        {
            src: {
                type: String,
                required: true
            },
            title: {
                type: String
            }
        }
    ],
    shop: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'shop'
    }
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('product', ProductModel);
