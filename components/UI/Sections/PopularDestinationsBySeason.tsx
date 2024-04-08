import React from "react";
import { locationsBySeason } from "@/static-data/images";

import SharedPagePlaceCarousel from "../Carousel/SharedPagePlaceCarousel";

const PopularDestinationsBySeason = () => {
  return <SharedPagePlaceCarousel items={locationsBySeason} extra />;
};

export default PopularDestinationsBySeason;
