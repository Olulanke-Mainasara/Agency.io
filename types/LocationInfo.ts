import { Image } from "./Image";

type Review = {
  _key: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  pictures: Image[];
  date: string;
};

export type LocationInfo = {
  _id: string;
  name: string;
  slug: string;
  about: string;
  displayImage: Image;
  category: string;
  picture: Image[];
  rating: number;
  address: string;
  contact: {
    website: string;
    telephone: number;
    email: string;
  };
  coordinates: {
    altitude: number;
    latitude: number;
    longitude: number;
  };
  reviews: Review[];
  faqs: Faq[];
};
