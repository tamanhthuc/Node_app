import { Media } from "../shared/Media";
import { User } from "../user";

export interface Review<T = User | string> {
  rating: number;
  title: string;
  description: string;
  user: T;
  time_creation: number;
  media?: Array<Media>;
}