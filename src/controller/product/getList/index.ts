import { RequestHandler } from "express";
import { ResponseEntity } from "../../../response";
import Product from "../../../model/product";

const gelAllProductController: RequestHandler<any, any, any> = async (req, res, next) => {
    const page = req.body.page * 1 || 1;
    const limit = req.body.limit*1  || 9;
    const skip = (page - 1) *limit;
    const minPrice = req.body.minPrice * 1 || 0;
    const maxPrice = req.body.maxPrice * 1 || 0;

    const products = await Product.find({ 'price.original_price': { $gte: minPrice, $lte: maxPrice } }).skip(skip).limit(limit);;

    try {
        res.json({
            code: 200,
            message: 'success',
            result: products.length,
            data: {
                products
            }
          })
       
    }catch(err){
        next(err);
    }
}

export default gelAllProductController;