import { locationsByMonth } from "@/static-data/images";
import React from "react";

import DefaultCarousel from "../Carousel/DefaultCarousel";

const PopularDestinationsByMonth = () => {
  return <DefaultCarousel items={locationsByMonth} extra />;
};

export default PopularDestinationsByMonth;
