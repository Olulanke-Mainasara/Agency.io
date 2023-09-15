import { locationsBySeason } from "@/static-data/images";
import React from "react";

import DefaultCarousel from "../Carousel/DefaultCarousel";

const PopularDestinationsBySeason = () => {
  return <DefaultCarousel items={locationsBySeason} extra />;
};

export default PopularDestinationsBySeason;
