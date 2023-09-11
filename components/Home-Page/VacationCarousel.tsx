import { vacationCarousel } from "@/static-data/images";
import React from "react";

import FullPageCarousel from "../UI/Carousel/FullPageCarousel";

const VacationCarousel = () => {
  return <FullPageCarousel items={vacationCarousel} />;
};

export default VacationCarousel;
