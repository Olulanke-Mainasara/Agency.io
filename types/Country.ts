type Country = {
  _id: string;
  name: string;
  slug: string;
  flag: {
    image: string;
    alt: string;
  };
  picture: {
    image: string;
    alt: string;
  };
  coordinates: {
    alt: number;
    lat: number;
    lon: number;
  };
};
