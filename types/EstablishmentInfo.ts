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
  pictures?: Image[];
  rating?: number;
  priceLevel?: number;
  address?: string;
  contact?: {
    website?: string;
    telephone?: string;
    email?: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
    alt?: number;
  };
  faqs: Faq[];
};
