import { model, Schema, Types } from "mongoose";
import { Shop } from "../../types/model/shop";

const ShopModel = new Schema<Shop>({
  owner: {
    type: Types.ObjectId,
    unique: true,
    required: true
  },
  time_creation: {
    type: Number,
    default: Date.now(),
    required: true
  }
}, {
  timestamps: true
});

export default model('shop', ShopModel);