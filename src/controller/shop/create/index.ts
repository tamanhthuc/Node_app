import { RequestHandler } from "express";
import ShopModel from '../../../model/shop';
import { ResponseEntity } from "../../../response";

const createShopController: RequestHandler<any, ResponseEntity> = async (req, res, next) => {
  try{
    const userId = req.user!.userId;
    const shopExistedUser = await ShopModel.findOne({owner: userId});
    if (shopExistedUser) {
      return res.status(422).json(new ResponseEntity({
        code: 422,
        message: "Shop is already existed"
      }))
    };
    const shop = new ShopModel({
      owner: userId,
    });
    const shopInfo = await (await shop.save()).populate('owner');
    console.log(shopInfo);
    res.json(new ResponseEntity({
      code: 200,
      message: 'OK',
      data: shopInfo
    }));
  }catch(err) {
    next(err);
  }
};

export default createShopController;
