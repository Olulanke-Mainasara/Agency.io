import { Image } from "./Image";
import { LocationInfo } from "./LocationInfo";

type Section = {
  _id: string;
  title: string;
  locations: LocationInfo[];
};

export type Experience = {
  _id: string | number;
  name: string;
  slug: string;
  displayImage: Image;
  description: string;
  top10: LocationInfo[];
  sections?: Section[];
  icon?: React.JSX.Element;
};
