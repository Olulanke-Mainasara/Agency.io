import { recommendedDes } from "@/static-data/images";
import React from "react";

import Carousel from "../UI/Carousel/Carousel";

const RecommendedDestinations = () => {
  return (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-4xl text-right xl:px-8 md:text-5xl">
        Destinations we{" "}
        <span className="text-brandDark dark:text-brandLight">recommend</span>
      </h1>

      <Carousel items={recommendedDes} />
    </section>
  );
};

export default RecommendedDestinations;
