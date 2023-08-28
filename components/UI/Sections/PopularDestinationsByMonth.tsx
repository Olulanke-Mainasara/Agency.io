import { locationsByMonth } from "@/static-data/images";
import React from "react";

import Carousel from "../Carousel/Carousel";

const PopularDestinationsByMonth = () => {
  return <Carousel items={locationsByMonth} extra />;
};

export default PopularDestinationsByMonth;
