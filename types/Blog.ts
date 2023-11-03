import { Image } from "./Image";

export type Blog = {
  _id: string | number;
  title: string;
  slug: string;
  image: Image;
  description: string;
  content?: string[];
};
