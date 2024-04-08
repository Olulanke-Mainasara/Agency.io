import React from "react";
import { locationsByMonth } from "@/static-data/images";

import SharedPagePlaceCarousel from "../Carousel/SharedPagePlaceCarousel";

const PopularDestinationsByMonth = () => {
  return <SharedPagePlaceCarousel items={locationsByMonth} extra />;
};

export default PopularDestinationsByMonth;
