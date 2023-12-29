import React from "react";
import { propertyCarousel } from "@/static-data/images";

import FullPageCarousel from "../UI/Carousel/FullPageCarousel";

const PropertyCarousel = () => {
  return <FullPageCarousel items={propertyCarousel} />;
};

export default PropertyCarousel;
