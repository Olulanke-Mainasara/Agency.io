import { propertyCarousel } from "@/static-data/images";
import React from "react";

import FullPageCarousel from "../UI/Carousel/FullPageCarousel";

const PropertyCarousel = () => {
  return <FullPageCarousel items={propertyCarousel} />;
};

export default PropertyCarousel;
