import { EstablishmentInfo } from "./EstablishmentInfo";
import { Image } from "./Image";

type Section = {
  _id: string;
  title: string;
  locations: EstablishmentInfo[];
};

export type Experience = {
  _id: string | number;
  name: string;
  slug: string;
  displayImage: Image;
  description: string;
  top10: EstablishmentInfo[];
  sections?: Section[];
  icon?: React.JSX.Element;
};
