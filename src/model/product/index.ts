import { model, Schema, Types } from "mongoose";
import { Product } from "../../types/model/product";

const ProductModel = new Schema<Product>({
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
      type: Types.ObjectId,
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
    type: Types.ObjectId,
    required: true,
    ref: 'shop'
  }
}, {
  timestamps: true,
});

export default model('product', ProductModel);
