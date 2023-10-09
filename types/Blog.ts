import { StaticImageData } from "next/image";

export type Blog = {
  _id: string | number;
  title: string;
  slug: string;
  image: {
    url: string | StaticImageData;
    alt: string;
  };
  description: string;
  content?: string[];
};
