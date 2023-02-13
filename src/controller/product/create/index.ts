import { RequestHandler } from "express";
import { ResponseEntity } from "../../../response";
import { Media } from "../../../types/model/shared/Media";
import { Price } from "../../../types/model/shared/Price";
import ShopModel from '../../../model/shop';
import ProductModel from "../../../model/product";

interface CreateProductRequest {
  name: string;
  quantity: number;
  description?: string;
  price: Price;
  media_urls?: Array<Media>;
};

const createProductController: RequestHandler<any, ResponseEntity, CreateProductRequest> = async (req, res, next) => {
  try{
    const userId = req.user!.userId;
    const shop = await ShopModel.findOne({owner: userId});
    if (!shop) {
      return res.status(422).json(new ResponseEntity({
        code: 422,
        message: "User is not valid to create product",
      }))
    };
    const product = new ProductModel({
      ...req.body,
      shop: shop._id
    });
    const dataProduct = await product.save();
    res.json(new ResponseEntity({
      code: 200,
      message: 'OK',
      data: dataProduct
    }))
  }catch(err) {
    next(err);
  }
};

export default createProductController;
