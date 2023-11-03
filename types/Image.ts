import { StaticImageData } from "next/image";

export type Image = {
  url: string | StaticImageData;
  alt: string;
  caption?: string;
};
