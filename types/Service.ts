import { EstablishmentInfo } from "./EstablishmentInfo";
import { Section } from "./Experience";
import { Image } from "./Image";

export type Service = {
  _id: string | number;
  name: string;
  slug: string;
  displayImage: Image;
  description: string;
  top10: EstablishmentInfo[];
  sections?: Section[];
  icon?: React.JSX.Element;
};
