type Experience = {
  _id: string | number;
  name: string;
  slug: string;
  description: string;
  sections?: Section[];
  icon?: React.JSX.Element;
};
