import { Review } from "../review";
import { Media } from "../shared/Media";
import { Price } from "../shared/Price";
import { Shop } from "../shop";

export interface Product {
  name: string;
  media_urls?: Array<Media>;
  like: number;
  price: Price;
  num_buy: number;
  description?: string;
  image_cover?: string;
  time_creation: number;
  quantity: number;
  reviews?: Array<Review>;
  shop: Shop
};
