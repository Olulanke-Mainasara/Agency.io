import { Image } from "./Image";

export type Review = {
  _key: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  pictures?: Image[];
  date: string;
};

export type EstablishmentInfo = {
  _id: string;
  name: string;
  slug: string;
  about: string;
  displayImage: Image;
  continent: string;
  country: string;
  place: string;
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
