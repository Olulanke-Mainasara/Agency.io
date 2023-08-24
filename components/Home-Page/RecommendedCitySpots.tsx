import { cities } from "@/static-data/images";
import React from "react";

import Carousel from "../UI/Carousel/Carousel";

const RecommendedCitySpots = () => {
  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-4xl text-right xl:px-8 md:text-5xl">
        Recommended{" "}
        <span className="text-brandDark dark:text-brandLight">spots</span> in
        Lagos
      </h1>

      <Carousel items={cities} />
    </section>
  );
};

export default RecommendedCitySpots;
