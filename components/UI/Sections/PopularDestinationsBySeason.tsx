import React from "react";
import { locationsBySeason } from "@/static-data/destinations";

import SharedPagePlaceCarousel from "../Carousel/SharedPagePlaceCarousel";

const PopularDestinationsBySeason = () => {
  return <SharedPagePlaceCarousel items={locationsBySeason} extra />;
};

export default PopularDestinationsBySeason;
