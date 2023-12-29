import { Blog } from "./Blog";
import { Essential, Reason } from "./Country";
import { EstablishmentInfo } from "./EstablishmentInfo";
import { Image } from "./Image";

export type Place = {
  _id: string | number;
  name: string;
  slug: string;
  extra?: string;
  displayImage: Image;
  country: string;
  description?: string;
  popularSpots: EstablishmentInfo[];
  pictures: Image[];
  essentials: Essential[];
  posts: Blog[];
  whyWeLove: Reason[];
  coordinates: {
    altitude: number;
    latitude: number;
    longitude: number;
  };
  faqs: Faq[];
};
