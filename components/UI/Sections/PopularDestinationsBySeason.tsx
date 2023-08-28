import { locationsBySeason } from "@/static-data/images";
import React from "react";

import Carousel from "../Carousel/Carousel";

const PopularDestinationsBySeason = () => {
  return <Carousel items={locationsBySeason} extra />;
};

export default PopularDestinationsBySeason;
