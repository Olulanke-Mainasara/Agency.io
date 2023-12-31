import { Blog } from "./Blog";
import { EstablishmentInfo } from "./EstablishmentInfo";
import { Image } from "./Image";
import { Place } from "./Place";

export type Essential = {
  _key: string;
  title: string;
  description: string;
  locations: EstablishmentInfo[];
};

export type Reason = {
  _key: string;
  title: string;
  locations: EstablishmentInfo[];
};

export type Country = {
  _id: string;
  name: string;
  flag: Image;
  slug: string;
  displayImage: Image;
  description: string;
  continent: string;
  pictures: Image[];
  essentials: Essential[];
  destinations: Place[];
  posts: Blog[];
  whyWeLove: Reason[];
  coordinates: {
    altitude: number;
    latitude: number;
    longitude: number;
  };
  faqs: Faq[];
};
